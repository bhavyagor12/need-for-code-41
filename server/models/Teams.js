import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
      unique: true,
    },
    teacherid: {
      type: "string",
      required: true,
    },
    students: {
        type: ["string"],
        default: [],
    },
    assignments: {
      type: [{
        description: {
          type: "string",
          required: true,
        },
        typeofassignment: {
          type: "string",
          required:true,
        },
        timeofsubmission:{
          type: Date,
        },
        lastdate:{
          type: Date,
        },
        totalmarks:{
          type: Number,
        },
        sent:{
          type: Boolean,
          required: true,
        }
      }],
      default: [],
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Teams", TeamsSchema);
