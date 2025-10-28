import mongoose from "mongoose";

const summarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  articleId: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
  summaryText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Summary", summarySchema);
