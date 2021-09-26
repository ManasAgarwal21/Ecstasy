import express from "express";
import mongoose, { mongo } from "mongoose";

const app = express();

const mongoDbURL = 'mongodb+srv://ecstasy_user:kkhJSQ4kwqlAGlVF@cluster0.yzqar.mongodb.net/EcstasyDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoDbURL);

app.listen(1000, () => {
    console.log("success");
})