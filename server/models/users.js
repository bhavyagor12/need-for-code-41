import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    sapid:{
      type: "Integer",
      required: true,
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
      type: integer,
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
