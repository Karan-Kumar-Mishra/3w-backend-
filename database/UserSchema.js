import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
      //  unique: true 
    },
    social_media:{
        type: String,
    },
    images_url:[]
})
export default UserSchema;