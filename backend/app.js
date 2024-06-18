import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";

const app = express();
// password - GabruBanGye%40%23123
app.use("/.api/user", router); // http://localhost:5000/api/user/
// u are free to add any url here
mongoose
  .connect(
    "mongodb+srv://admin:GabruBanGye%40%23123@cluster1.7wdysvo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
  )
  //   this is the promise and database request also
  //   it can fail also
  .then(() => app.listen(8000))
  .then(() => console.log("Connected to db ... Thanks "))
  .catch((err) => console.log(err));
