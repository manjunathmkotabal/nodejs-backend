import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect =await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Connected to MongoDB", connect.connection.host, connect.connection.name);
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;