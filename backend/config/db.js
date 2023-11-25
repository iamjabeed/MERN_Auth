import mongoose from "mongoose";

const connectDB = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("successfully connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error.message);
    process.exit(1);
  }
};
export default connectDB;
