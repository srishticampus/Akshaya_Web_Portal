const FeedbackModel = require('../models/feedbackModel'); // Feedback model

// Register Feedback
const registerFeedback = async (req, res) => {
  try {
    const { name, rating, comments } = req.body;

    const newFeedback = new FeedbackModel({
      name,
      rating,
      comments,
    });

    await newFeedback.save();
    return res.json({
      status: 200,
      msg: "Feedback submitted successfully",
      data: newFeedback,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      msg: "Error submitting feedback",
      error: error.message,
    });
  }
};

// View All Feedbacks
const viewFeedbacks = async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find().sort({ createdAt: 1 }).exec();
    return res.json({
      status: 200,
      msg: "Feedbacks obtained successfully",
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      msg: "Failed to retrieve feedbacks",
      error: error.message,
    });
  }
};

// View Feedback by ID
const viewFeedbackById = async (req, res) => {
  try {
    const feedback = await FeedbackModel.findById(req.params.id).exec();
    if (feedback) {
      return res.json({
        status: 200,
        msg: "Feedback obtained successfully",
        data: feedback,
      });
    } else {
      return res.json({
        status: 404,
        msg: "Feedback not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      msg: "Error retrieving feedback",
      error: error.message,
    });
  }
};


module.exports = {
  registerFeedback,
  viewFeedbacks,
  viewFeedbackById,
};