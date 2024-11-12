const Applicant = require('../models/ApplicantModel');

// Add new Akshaya record
const addApplicant = async (req, res) => {
    try {
        const { email, name, pincode, district,  contact, type } = req.body;

       

        // Create new Applicant document
        const newApplicant = new Applicant({
            email,
            name,
            pincode,
            district,
            date:new Date(),
            contact,
            type
        });

        // Save to database
        const savedApplicant = await newApplicant.save();
        res.status(200).json({
            status:200,
            msg: "Applicant registered successfully",
            data: savedApplicant
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status:500,
            msg: "Failed to register Applicant",
            error: error.message
        });
    }
};

// View all Applicant records
const viewAllApplicants = async (req, res) => {
    try {
        const Applicants = await Applicant.find();
        res.status(200).json({
            status:200,
            msg: "Applicant data retrieved successfully",
            data: Applicants
        });
    } catch (error) {
        res.status(500).json({
            status:500,
            msg: "Failed to retrieve Applicant data",
            error: error.message
        });
    }
};

// View Applicant record by ID
const viewApplicantById = async (req, res) => {
    try {
        const { id } = req.params;
        const ApplicantData = await Applicant.findById(id);

        if (!ApplicantData) {
            return res.status(404).json({
                status:404,
                msg: "Applicant record not found"
            });
        }

        res.status(200).json({
            status:200,
            msg: "Applicant data retrieved successfully",
            data: ApplicantData
        });
    } catch (error) {
        res.status(500).json({
            status:500,
            msg: "Failed to retrieve Applicant data",
            error: error.message
        });
    }
};

module.exports = {
    addApplicant,
    viewAllApplicants,
    viewApplicantById
};
