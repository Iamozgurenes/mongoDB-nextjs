import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connection successful");
    } catch (error) {
        console.log("MongoDB connection failed");
    }
};
   
export default connectMongoDB; 
