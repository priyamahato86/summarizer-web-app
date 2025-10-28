import Summary from "../models/Summary.js";

export const createSummary = async (req, res) => {
  try {
    const { summaryText, articleId } = req.body;
    const newSummary = await Summary.create({
      userId: req.user.id,
      articleId,
      summaryText,
    });
    res.status(201).json(newSummary);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSummaries = async (req, res) => {
  try {
    const summaries = await Summary.find({ userId: req.user.id });
    res.json(summaries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteSummary = async (req, res) => {
  try {
    const summary = await Summary.findById(req.params.id);
    if (!summary) return res.status(404).json({ message: "Summary not found" });
    if (summary.userId.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await summary.deleteOne();
    res.json({ message: "Summary deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
