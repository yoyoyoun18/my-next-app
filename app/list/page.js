import Link from "next/link";
import { connectDB } from "../util/database";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <Link href={`/detail/${result[i]._id}`}>
            <div className="list-item" ket={i}>
              <h4>{result[i].title}</h4>
              <p>{result[i].content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
