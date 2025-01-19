import mongoose from "mongoose";
import UserSchema from "./UserSchema.js";

const Usermodel=mongoose.model("Users3w",UserSchema);

export default Usermodel;
