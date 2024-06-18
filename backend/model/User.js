import mongoose from "mongoose";

const Schema = mongoose.Schema;

// adding validations to the fields like name , email , password
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, // u cannot leave it empty
    unique: true, // every email should be unique
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});
// to create model for us like a collection

export default mongoose.model("User.js", userSchema);
// in mongodb the naming convention says that
// User.js = users
//1) it will store the file in small letters
// 2) singluar -> pural form converted
