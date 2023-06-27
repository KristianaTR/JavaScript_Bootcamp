import mongoose from "mongoose";
import express from "express";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3005;

app.use(express.json());

const connectionToDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://kristianatatarcuka:inspektore@cluster0.t6wcf5a.mongodb.net/users'
        );
        console.log("Connection to DB is successful");
    } catch(error) {
        console.log(error);
    }
};

app.use("/user", userRoute);

app.listen(port, () => {
    connectionToDB()
    console.log(`Server started on port: ${port}`);
});