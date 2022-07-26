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
    },
    
    queries:{
      type: [{
          askerid: {
            type: "string",
            required: true,
          },
          question: {
            type: "string",
            required: true,
          },
          answer: {
            type: "string",
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
