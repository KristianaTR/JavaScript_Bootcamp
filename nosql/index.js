import mongoose from "mongoose";
import express from "express";
import studentRoute from "./routes/studentRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
const port = 3005;

app.use(express.json());

const connectionToDB = async () => {

    //try and catch version -->
    try {
        await mongoose.connect(
            'mongodb+srv://kristianatatarcuka:inspektore@cluster0.t6wcf5a.mongodb.net/students'
        );
        console.log("Connection to DB is successful");
    } catch(error) {
        console.log(error);
    }

    //THIS IS VERSION 2ND how to connect to the DB --> need to be updated
    // mongoose
    // .connect('mongodb+srv://kristianatatarcuka:inspektore@cluster0.t6wcf5a.mongodb.net/')
    // .then(() => {
    //     console.log("Connection to DB is successful");
    // })
    // .catch ((error) =>)
};

app.use("/student", studentRoute);
app.use("/user", userRoute);

app.listen(port, () => {
    connectionToDB()
    console.log(`Server started on port: ${port}`);
});