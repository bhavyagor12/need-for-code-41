import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    teacherid: {
      type: "string",
      required: true,
    },
    students: {
        type: ["string"],
        default: [],
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Teams", TeamsSchema);
