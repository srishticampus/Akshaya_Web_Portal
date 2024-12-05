const Enquiry = require('../models/enqModel');

// Register Enquiry
const addEnquiry = async (req, res) => {
  try {
    const { email, address, contact, description, name, date, appType, enqType } = req.body;

    if (!email || !contact || !name || !appType || !enqType) {
      return res.status(400).json({
        status: 400,
        msg: "All required fields (email, contact, name, appType, enqType) must be provided",
      });
    }

    const newEnquiry = new Enquiry({
      email,
      address,
      contact,
      description,
      name,
      date,
      appType,
      enqType,
      
    });

    await newEnquiry.save();
    return res.json({
      status: 200,
      msg: "Enquiry submitted successfully",
      data: newEnquiry,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 500,
      msg: "Error submitting enquiry",
      error: error.message,
    });
  }
};

// View All Enquiries
const viewEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).exec();
    return res.json({
      status: 200,
      msg: "Enquiries retrieved successfully",
      data: enquiries,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      msg: "Failed to retrieve enquiries",
      error: error.message,
    });
  }
};

// View Enquiry by ID
const viewEnquiryById = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id).exec();
    if (enquiry) {
      return res.json({
        status: 200,
        msg: "Enquiry retrieved successfully",
        data: enquiry,
      });
    } else {
      return res.status(404).json({
        status: 404,
        msg: "Enquiry not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      msg: "Error retrieving enquiry",
      error: error.message,
    });
  }
};

// Update Enquiry by ID
const updateEnquiry = async (req, res) => {
  try {
    const updatedEnquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedEnquiry) {
      return res.json({
        status: 200,
        msg: "Enquiry updated successfully",
        data: updatedEnquiry,
      });
    } else {
      return res.status(404).json({
        status: 404,
        msg: "Enquiry not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      msg: "Error updating enquiry",
      error: error.message,
    });
  }
};

// Delete Enquiry by ID
const deleteEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (enquiry) {
      return res.json({
        status: 200,
        msg: "Enquiry deleted successfully",
        data: enquiry,
      });
    } else {
      return res.status(404).json({
        status: 404,
        msg: "Enquiry not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      msg: "Error deleting enquiry",
      error: error.message,
    });
  }
};

module.exports = {
  addEnquiry,
  viewEnquiries,
  viewEnquiryById

};
