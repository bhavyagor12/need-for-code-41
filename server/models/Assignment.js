import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema(
  {
    teamid: {
        type: "string",
        required: true,
    },
    teacherid: {
      type: "string",
      required: true,
      unique: true,
    },
    description: {
      type: "string",
      required: true,
    },
    typeofassignment: {
      type: "string",
      required:true,
    },
    timeofsubmission:{
      type: date,
    },
    lastdate:{
        type: date,
    },
    totalmarks:{
      type: Number,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Assignment", AssignmentSchema);
