import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// import bookRoute from "./route/book.route.js";
 import userRoute from "./route/user.route.js";
 import  bookRoute from "./route/book.route.js";
import areaRoute from "./route/area.route.js";
// import  codeRoute from "./route/code.route.js";
import  verifyRoute from "./route/verify.route.js";


const app = express();

 app.use(cors());
 app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
      mongoose.connect(URI);
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
 app.use("/book", bookRoute);
 app.use("/user", userRoute);
 app.use("/area", areaRoute);
//  app.use("/code", codeRoute);
 app.use("/verify", verifyRoute);


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});