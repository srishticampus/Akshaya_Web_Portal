const voModel = require('../models/voModel');
const staffModel = require('../models/staffModel');
const akshayaModel = require('../models/akshayaModel');
const common=require('../controllers/commonQueries')

// Register a new VO
const registerVO = async (req, res) => {
    try {
        const { email, password, username, pincode, district, landmark, village, taluk, localbody,  date, areaType } = req.body;

        const newVO = new voModel({
            email,
            password,
            username,
            pincode,
            district,
            landmark,
            village,
            taluk,
            localbody,
            
            areaType,
            date,
            date: new Date()
        });

        let existingVO = await voModel.findOne({ email });
        let existingAkshaya = await akshayaModel.findOne({ email });
        let existingStaff = await staffModel.findOne({ email });
        let existingVOUser= await voModel.findOne({ username });

        if (existingVO || existingAkshaya || existingStaff) {
            return res.json({
                status: 409,
                msg: "Email already registered with us",
                data: null
            });
        }
        if (existingVOUser) {
            return res.json({
                status: 409,
                msg: "Username already registered with us",
                data: null
            });
        }
        await newVO.save()
            .then(data => {
                return res.json({
                    status: 200,
                    msg: "Village office registered successfully",
                    data: data
                });
            })
            .catch(err => {
                console.log(err);
                return res.json({
                    status: 500,
                    msg: "Data not inserted",
                    data: err
                });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View all VO requests for admin approval
const viewVOReqsForAdmin = (req, res) => {
    voModel.find({ adminApproved: false })
        .exec()
        .then(data => {
            if (data.length > 0) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 200,
                    msg: "No data obtained",
                    data:[]
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};

// Edit a VO by ID
const editVOById = async (req, res) => {
    let flag = 0;
    const { email, username, pincode, district, landmark, village, taluk, panchayath, corporation, block, areaType, ward } = req.body;

    let existingVO = await voModel.find({ email });
    let voData = await voModel.findById({ _id: req.params.id });

    await existingVO.map(x => {
        if (x.email != voData.email) {
            flag = 1;
        }
    });

    if (flag === 0) {
        await voModel.findByIdAndUpdate({ _id: req.params.id }, {
            email,
            username,
            pincode,
            district,
            landmark,
            village,
            taluk,
            panchayath,
            corporation,
            block,
            areaType,
            ward
        })
            .exec()
            .then(data => {
                res.json({
                    status: 200,
                    msg: "Updated successfully"
                });
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    msg: "Data not updated",
                    Error: err
                });
            });
    } else {
        return res.json({
            status: 409,
            msg: "Email already registered with us",
            data: null
        });
    }
};

// View VO by ID
const viewVOById = (req, res) => {
    voModel.findById({ _id: req.params.id })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data obtained successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No data obtained",
                Error: err
            });
        });
};

// View all approved VOs
const viewVOs = (req, res) => {
    voModel.find({ adminApproved: true })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data obtained successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No data obtained",
                Error: err
            });
        });
};

// Delete VO by ID
const deleteVOById = (req, res) => {
    voModel.findByIdAndDelete({ _id: req.params.id })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data deleted successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No data obtained",
                Error: err
            });
        });
};

// Approve VO by ID
const approveVOById = (req, res) => {
    voModel.findByIdAndUpdate({ _id: req.params.id }, { isActive: true, adminApproved: true })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "VO approved successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};

// Activate VO by ID
const activateVOById = (req, res) => {
    voModel.findByIdAndUpdate({ _id: req.params.id }, { isActive: true })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "VO activated successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No data obtained",
                Error: err
            });
        });
};

// Deactivate VO by ID
const deActivateVOById = (req, res) => {
    voModel.findByIdAndUpdate({ _id: req.params.id }, { isActive: false })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "VO deactivated successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No data obtained",
                Error: err
            });
        });
};

// Forgot password for VO
const forgotPassword = (req, res) => {
  common.forgotPWDsentMail(req.body.email,voModel).then(result=>{
    console.log(result);
   
  
            if (result != null)
                res.json({
                    status: 200,
                    msg: "Mail send successfully"
                });
            else
                res.json({
                    status: 500,
                    msg: "User not found"
                });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not updated",
                Error: err
            });
        });





};

// change password for VO
const changePassword = async (req, res) => {
    let pwdMatch = false;

    await voModel.findById({ _id: req.params.id })
        .exec()
        .then(data => {
            if (data.password === req.body.oldpassword)
                pwdMatch = true;
        })
        .catch(err => {
            return res.status(500).json({
                status: 500,
                msg: "Data not updated",
                Error: err
            });
        });

    if (pwdMatch) {
        await voModel.findByIdAndUpdate({ _id: req.params.id }, {
            password: req.body.password
        })
            .exec()
            .then(data => {
                if (data != null)
                    return res.json({
                        status: 200,
                        msg: "Password updated successfully"
                    });
                else
                    return res.json({
                        status: 500,
                        msg: "User not found"
                    });
            })
            .catch(err => {
                return res.status(500).json({
                    status: 500,
                    msg: "Data not updated",
                    Error: err
                });
            });
    } else {
        return res.json({
            status: 405,
            msg: "Old password doesn't match"
        });
    }
};

// rewetr password for VO
const resetPassword = async (req, res) => {
    let pwdMatch = false;

    await voModel.findById({ _id: req.params.id })
        .exec()
        .then(data => {
            if (data.password === req.body.password)
                pwdMatch = true;
        })
        .catch(err => {
            return res.status(500).json({
                status: 500,
                msg: "Data not updated",
                Error: err
            });
        });

    if (!pwdMatch) {
        await voModel.findByIdAndUpdate({ _id: req.params.id }, {
            password: req.body.password
        })
            .exec()
            .then(data => {
                if (data != null)
                    return res.json({
                        status: 200,
                        msg: "Password updated successfully"
                    });
                else
                    return res.json({
                        status: 500,
                        msg: "User not found"
                    });
            })
            .catch(err => {
                return res.status(500).json({
                    status: 500,
                    msg: "Data not updated",
                    Error: err
                });
            });
    }
    //  else {
    //     return res.json({
    //         status: 405,
    //         msg: "New Password is same as Old Password !!"
    //     });
    // }
};
// Login for VO
const login = async (req, res) => {
    let { email, password } = req.body;

    let voData = await voModel.findOne({ username: email });

    if (voData != null) {
        if (voData.password == password) {
           
            if (!voData.adminApproved) {
                return res.json({
                    status: 403,
                    msg: "Waiting for Admin Approval!"
                });
            }
            else if (!voData.isActive) {
                return res.json({
                    status: 403,
                    msg: "Your account is deactivated!"
                });
            }
            return res.json({
                status: 200,
                msg: "User logged in successfully",
                data: voData
            });
        } else {
            return res.json({
                status: 405,
                msg: "Incorrect Password"
            });
        }
    } else {
        return res.json({
            status: 500,
            msg: "User not found"
        });
    }
};

const viewActiveVos = (req, res) => {
    voModel.find({ adminApproved: true })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data obtained successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No Data obtained",
                Error: err
            });
        });
};
const viewVillageByDistrict = (req, res) => {
    console.log('here');
    
    voModel.find({ district:req.params.district,isActive:true })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data obtained successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No Data obtained",
                Error: err
            });
        });
};
module.exports = {
    registerVO,
    viewVOReqsForAdmin,
    viewVOs,
    deleteVOById,
    approveVOById,
    activateVOById,
    deActivateVOById,
    forgotPassword,
    resetPassword,
    login,
    viewVOById,
    editVOById,
    changePassword,
    viewActiveVos,
    viewVillageByDistrict
};
