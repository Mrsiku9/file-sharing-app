import mongoose from "mongoose";

const connectDB = async (username,password) => {
  const DB_URL =
    `mongodb://${username}:${password}@ac-hdpd7i3-shard-00-00.w95jkjn.mongodb.net:27017,ac-hdpd7i3-shard-00-01.w95jkjn.mongodb.net:27017,ac-hdpd7i3-shard-00-02.w95jkjn.mongodb.net:27017/file-sharing-app?ssl=true&replicaSet=atlas-1498fi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp`;
  try {
    const response = await mongoose.connect(DB_URL, { useNewUrlParser: true });

    console.log(`MongoDB Connected successfully`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};
export default connectDB;
