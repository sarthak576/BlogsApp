import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();
// password - qjG893M40h9I31dP (mongodb ka pass)

app.use("/.api/user", router);

// http://localhost:5000/api/user/
// u are free to add any url here
mongoose
  .connect(
    `mongodb+srv://admin:qjG893M40h9I31dP@cluster0.6yv1iez.mongodb.net/BLogApp?retryWrites=true&w=majority&appName=Cluster0`
  )
  //   this is the promise and database request also
  //   it can fail also
  .then(() => app.listen(8000))
  .then(() => console.log(`Connected to db ... Thanks on 8000`))
  .catch((err) => console.log(err));
