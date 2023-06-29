import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3007;

app.use(express.json());

dotenv.config();

const connectionToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOBD_URL);
        console.log("Connection to DB is successful");
    } catch(error) {
        console.log(error);
    }
};

app.use('/', userRoute);

app.listen(port, () => {
    connectionToDB()
    console.log(`Server started on port: ${port}`);
});