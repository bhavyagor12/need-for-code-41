import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    sapid:{
      type: Number,
      required: true,
      size:10,
      unique: true
    },
    name: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
    profileimg: {
      type: "string",
    },
    yearofgraduation: {
      type: Number,
      length: 4,
    },
    typeofuser:{
      type: "string",
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
