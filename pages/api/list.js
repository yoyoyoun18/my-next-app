import { connectDB } from "../../app/util/database";

export default async function handler(요청, 응답) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  if (요청.method == "GET") {
    응답.status(200).json(
      result.map((a, i) => {
        return <div key={i}>{result[i]}</div>;
      })
    );
  }
  if (요청.method == "POST") {
    응답.status(200).json({ name: "바보" });
  }
}
