import mongoose from "mongoose";

import dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);


const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("❌ Error Name:", error.name);
    console.error("❌ Error Message:", error.message);
    console.error(error);

    process.exit(1);
  }
};

export default connectDB;