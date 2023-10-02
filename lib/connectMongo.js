// import mongoose from "mongoose";

// const connectMongo = async () => {
//     mongoose.set('strictQuery' , true);
//   try {
//     if (mongoose.connection.readyState === 0) {
//       await mongoose.connect(process.env.MONGO_URL, {
//         dbName: "trello",
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
//     }
//     console.log("Connected to MongoDB");
//     return mongoose.connection;
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//     throw error;
//   }
// };

// export default connectMongo;
import mongoose from "mongoose";

let isConnected = false; 

export const connectMongo = async ()=> {
    mongoose.set('strictQuery' , true);
    if (isConnected) {
        console.log("MongoDB is already connected");
    }
    try {
        await mongoose.connect(process.env.MONGO_URL, {
        // await mongoose.connect("mongodb+srv://spopash:admin@cluster0.koj7em5.mongodb.net/", {
            dbName: "trello",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    };
};