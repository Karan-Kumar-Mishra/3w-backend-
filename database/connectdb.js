import mongoose from "mongoose";
async function connectdb() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB:" + error);
  }
}
export default connectdb;