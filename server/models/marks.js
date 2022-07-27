import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema(
  {
    marks: {
        type: [Number],
    },
    name: {
        type: "string",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Teams", TeamsSchema);
