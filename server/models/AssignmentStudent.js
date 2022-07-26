import mongoose from "mongoose";

const AssignmentStudentSchema = new mongoose.Schema(
  {
    studentid: {
        type: "string",
        required: true,
    },
    assignmentid:{
      type: "string",
      required: true,
    },
    teamid: {
      type: "string",
      required: true,
    },
    Submitted: {
      type: Boolean,
    },
    LateSubmitted:{
      type: Boolean,
    },
    marksgiven:{
      type: Number,
    },
    feedbackgiven:{
        type: "string",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AssignmentStudent", AssignmentStudentSchema);
