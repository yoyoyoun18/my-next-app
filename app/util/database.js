import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://admin:as123123@kpkpkp.cau2nx4.mongodb.net/?retryWrites=true&w=majority&appName=kpkpkp";
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo_) {
    global._mongo_ = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo_;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
