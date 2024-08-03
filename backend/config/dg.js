import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(conn.connection.host);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
};

export default connectDB;
