import mongoose from "mongoose";

const UserDetailsScehma = new mongoose.Schema(
  {
    Name: String,
    Email: { type: String, unique: true },
    Password: String,
    // userType: String,
  },
  {
    collection: "UserInfo",
  }
);

const createUserAccount = mongoose.model("UserInfo", UserDetailsScehma);
export default createUserAccount