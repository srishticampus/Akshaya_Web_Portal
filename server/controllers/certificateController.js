const applicationModel = require('../models/applicationModel');
const Certificate = require('../models/certificateModel');

// Add new certificate
const addCertificate = async (req, res) => {
    try {
        const {
            appId,
         
        } = req.body;

const appData=await applicationModel.findById(appId)
console.log(appData);

        const newCertificate = new Certificate({
            appId:appData._id,
            appNo:appData.appNo,
            applicantId:appData.applicantId,
            applicationType:appData.applicationType,
            vo:appData.vo,
            akshayaId:appData.akshayaId,
        });

        // Save to database
        const savedCertificate = await newCertificate.save();
await applicationModel.findByIdAndUpdate(appId,{
    status:"Certificate Issued"
})
        res.status(200).json({
            status: 200,
            msg: "Certificate registered successfully",
            data: savedCertificate,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            msg: "Failed to register certificate",
            error: error.message,
        });
    }
};

// View all certificates
const viewAllCertificates = async (req, res) => {
    try {
        const certificates = await Certificate.find()
            .populate('applicantId') 
            .populate('vo') 
            .populate('akshayaId')
            .sort({createdAt:-1})

        res.status(200).json({
            status: 200,
            msg: "Certificate data retrieved successfully",
            data: certificates,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to retrieve certificate data",
            error: error.message,
        });
    }
};

// View certificate by ID
const viewCertificateById = async (req, res) => {
    try {
        const { id } = req.params;
        const certificate = await Certificate.findById(id)
            .populate('applicantId')
            .populate('vo')
            .populate('akshayaId');

        if (!certificate) {
            return res.status(404).json({
                status: 404,
                msg: "Certificate not found",
            });
        }

        res.status(200).json({
            status: 200,
            msg: "Certificate data retrieved successfully",
            data: certificate,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to retrieve certificate data",
            error: error.message,
        });
    }
};
const viewCertificateByVoId = async (req, res) => {
    try {
        const { id } = req.params;
        const certificate = await Certificate.find({vo:id})
            .populate('applicantId')
            .populate('vo')
            .populate('akshayaId');

        if (!certificate) {
            return res.status(404).json({
                status: 404,
                msg: "Certificate not found",
            });
        }

        res.status(200).json({
            status: 200,
            msg: "Certificate data retrieved successfully",
            data: certificate,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to retrieve certificate data",
            error: error.message,
        });
    }
};
// View certificates by application type
const viewCertificatesByType = async (req, res) => {
    try {
        const { type } = req.params;
        const certificates = await Certificate.find({ applicationType: type })
            .populate('applicantId')
            .populate('vo')
            .populate('akshayaId');

        res.status(200).json({
            status: 200,
            msg: "Certificates retrieved successfully",
            data: certificates,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to retrieve certificates",
            error: error.message,
        });
    }
};

// Update certificate status
const updateCertificateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedCertificate = await Certificate.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedCertificate) {
            return res.status(404).json({
                status: 404,
                msg: "Certificate not found",
            });
        }

        res.status(200).json({
            status: 200,
            msg: "Certificate status updated successfully",
            data: updatedCertificate,
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to update certificate status",
            error: error.message,
        });
    }
};

module.exports = {
    addCertificate,
    viewAllCertificates,
    viewCertificateById,
    viewCertificatesByType,
    updateCertificateStatus,
    viewCertificateByVoId
};
