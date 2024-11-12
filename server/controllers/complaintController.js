const ComplaintModel = require('../models/complaintModel');

// Register Complaint
const registerComplaint = async (req, res) => {
    try {
        const { email, contact, description, userName, appType, appDate, complaintType, akshayaId } = req.body;

        // Create a new complaint document
        const newComplaint = new ComplaintModel({
            email,
            contact,
            description,
            userName,
            appType,
            appDate,
            complaintType,
            akshayaId

        });

        await newComplaint.save();
        return res.json({
            status: 200,
            msg: "Complaint registered successfully",
            data: newComplaint
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error registering complaint",
            error: error.message
        });
    }
};

// View All Active Complaints
const viewComplaints = async (req, res) => {
    try {
        const complaints = await ComplaintModel.find().sort({ createdAt: 1 }).exec();
        return res.json({
            status: 200,
            msg: "Complaints obtained successfully",
            data: complaints
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to retrieve complaints",
            error: error.message
        });
    }
};

// View Complaint by ID
const viewComplaintById = async (req, res) => {
    try {
        const complaint = await ComplaintModel.findById(req.params.id).exec();
        if (complaint) {
            return res.json({
                status: 200,
                msg: "Complaint obtained successfully",
                data: complaint
            });
        } else {
            return res.json({
                status: 404,
                msg: "Complaint not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error retrieving complaint",
            error: error.message
        });
    }
};



// Delete Complaint by ID
const deleteComplaintById = async (req, res) => {
    try {
        const deletedComplaint = await ComplaintModel.findByIdAndDelete(req.params.id).exec();
        if (deletedComplaint) {
            return res.json({
                status: 200,
                msg: "Complaint deleted successfully",
                data: deletedComplaint
            });
        } else {
            return res.json({
                status: 404,
                msg: "Complaint not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error deleting complaint",
            error: error.message
        });
    }
};



// view Complaint by Akshaya ID
const viewComplaintByAkshayaId = async (req, res) => {
    try {
        const activatedComplaint = await ComplaintModel.find(
            { akshayaId: req.params.id }

        ).exec();

        if (activatedComplaint) {
            return res.json({
                status: 200,
                msg: "Complaint activated successfully",
                data: activatedComplaint
            });
        } else {
            return res.json({
                status: 404,
                msg: "Complaint not found",
                data: []
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error activating complaint",
            error: error.message
        });
    }
};

module.exports = {
    registerComplaint,
    viewComplaints,
    viewComplaintById,
    deleteComplaintById,

    viewComplaintByAkshayaId
};
