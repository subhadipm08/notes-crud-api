import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // install dotenv , create a .env file inside project root and set MONGO_URI=connection URI of mongodb cluster/db name
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    process.exit(1); 
  }
};

export default connectDB;
