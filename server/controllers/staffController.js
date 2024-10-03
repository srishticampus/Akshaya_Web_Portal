const staffModel = require('../models/staffModel');

// Register Staff
const registerStaff = async (req, res) => {
    try {
        const { email, password, address, contact, designation, name } = req.body;

        let existingStaffEmail = await staffModel.findOne({ email });
        let existingStaffContact = await staffModel.findOne({ contact });

        if (existingStaffEmail) {
            return res.json({
                status: 409,
                msg: "Email already registered!",
                data: null
            });
        }

        if (existingStaffContact) {
            return res.json({
                status: 409,
                msg: "Contact number already registered!",
                data: null
            });
        }

        const newStaff = new staffModel({
            email,
            password,
            address,
            contact,
            designation,
            name,
            isActive: true,
            adminApproved: true
        });

        await newStaff.save();
        return res.json({
            status: 200,
            msg: "Staff registered successfully",
            data: newStaff
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error registering staff",
            error: error.message
        });
    }
};

// View All Approved Staff
const viewStaffs = async (req, res) => {
    try {
        const staffs = await staffModel.find({ adminApproved: true }).exec();
        return res.json({
            status: 200,
            msg: "Staff data obtained successfully",
            data: staffs
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to retrieve staff data",
            error: error.message
        });
    }
};

// View Staff by ID
const viewStaffById = async (req, res) => {
    try {
        const staff = await staffModel.findById(req.params.id).exec();
        if (staff) {
            return res.json({
                status: 200,
                msg: "Staff data obtained successfully",
                data: staff
            });
        } else {
            return res.json({
                status: 404,
                msg: "Staff not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error retrieving staff data",
            error: error.message
        });
    }
};

// Edit Staff by ID
const editStaffById = async (req, res) => {
    try {
        const { email, password, address, contact, designation, name } = req.body;

        const updatedStaff = await staffModel.findByIdAndUpdate(
            req.params.id,
            { email, password, address, contact, designation, name },
            { new: true }
        ).exec();

        if (updatedStaff) {
            return res.json({
                status: 200,
                msg: "Staff updated successfully",
                data: updatedStaff
            });
        } else {
            return res.json({
                status: 404,
                msg: "Staff not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error updating staff",
            error: error.message
        });
    }
};

// Delete Staff by ID
const deleteStaffById = async (req, res) => {
    try {
        const deletedStaff = await staffModel.findByIdAndDelete(req.params.id).exec();
        if (deletedStaff) {
            return res.json({
                status: 200,
                msg: "Staff deleted successfully",
                data: deletedStaff
            });
        } else {
            return res.json({
                status: 404,
                msg: "Staff not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error deleting staff",
            error: error.message
        });
    }
};

// Approve Staff by ID
const approveStaffById = async (req, res) => {
    try {
        const approvedStaff = await staffModel.findByIdAndUpdate(
            req.params.id,
            { adminApproved: true },
            { new: true }
        ).exec();

        if (approvedStaff) {
            return res.json({
                status: 200,
                msg: "Staff approved successfully",
                data: approvedStaff
            });
        } else {
            return res.json({
                status: 404,
                msg: "Staff not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error approving staff",
            error: error.message
        });
    }
};

// Activate Staff by ID
const activateStaffById = async (req, res) => {
    try {
        const activatedStaff = await staffModel.findByIdAndUpdate(
            req.params.id,
            { isActive: true },
            { new: true }
        ).exec();

        if (activatedStaff) {
            return res.json({
                status: 200,
                msg: "Staff activated successfully",
                data: activatedStaff
            });
        } else {
            return res.json({
                status: 404,
                msg: "Staff not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error activating staff",
            error: error.message
        });
    }
};

// Deactivate Staff by ID
const deActivateStaffById = async (req, res) => {
    try {
        const deactivatedStaff = await staffModel.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        ).exec();

        if (deactivatedStaff) {
            return res.json({
                status: 200,
                msg: "Staff deactivated successfully",
                data: deactivatedStaff
            });
        } else {
            return res.json({
                status: 404,
                msg: "Staff not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error deactivating staff",
            error: error.message
        });
    }
};

// Forgot Password
const forgotPassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const staff = await staffModel.findOneAndUpdate({ email }, { password }).exec();

        if (staff) {
            return res.json({
                status: 200,
                msg: "Password updated successfully"
            });
        } else {
            return res.json({
                status: 404,
                msg: "Staff not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error updating password",
            error: error.message
        });
    }
};

// Reset Password
const resetPassword = async (req, res) => {
    try {
        const { oldpassword, newpassword } = req.body;
        const staff = await staffModel.findById(req.params.id).exec();

        if (staff && staff.password === oldpassword) {
            staff.password = newpassword;
            await staff.save();
            return res.json({
                status: 200,
                msg: "Password reset successfully"
            });
        } else {
            return res.json({
                status: 400,
                msg: "Old password doesn't match"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error resetting password",
            error: error.message
        });
    }
};

// Login Staff
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const staff = await staffModel.findOne({ email }).exec();

        if (staff) {
            if (staff.password === password) {
                if (!staff.isActive) {
                    return res.json({
                        status: 403,
                        msg: "Your account is deactivated!"
                    });
                }

                return res.json({
                    status: 200,
                    msg: "Login successful",
                    data: staff
                });
            } else {
                return res.json({
                    status: 401,
                    msg: "Incorrect password"
                });
            }
        } else {
            return res.json({
                status: 404,
                msg: "Staff not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error logging in",
            error: error.message
        });
    }
};

module.exports = {
    registerStaff,
    viewStaffs,
    viewStaffById,
    editStaffById,
    deleteStaffById,
    approveStaffById,
    activateStaffById,
    deActivateStaffById,
    forgotPassword,
    resetPassword,
    login
};
