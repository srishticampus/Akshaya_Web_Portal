const akshaya = require('../models/akshayaModel');

const multer = require("multer");
const staffModel = require('../models/staffModel');
const voModel = require('../models/voModel');


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        const uniquePrefix = 'prefix-';
        const originalname = file.originalname;
        const extension = originalname.split('.').pop();
        const filename = uniquePrefix + originalname.substring(0, originalname.lastIndexOf('.')) + '-' + Date.now() + '.' + extension;
        cb(null, filename);
    },
});

const uploadSingle = multer({ storage: storage }).single('certificate');

const registerAkshaya = async (req, res) => {
    try {
        const { regNo, district, pincode, panchayath,email, contact, centreNo, password } = req.body;
console.log("akshaya");

        const newAkshaya = new akshaya({
            regNo,
            district,
            pincode,
            panchayath,
            centreNo,
            contact,
           
            password,
            email,
            certificate: req.file,
            date: new Date()


        });

        let existingakshaya1 = await akshaya.findOne({ contact });
        let existingvo1 = await voModel.findOne({ contact });
        let existingstaff1 = await staffModel.findOne({ contact });

        if (existingakshaya1 || existingstaff1 || existingvo1) {
            return res.json({
                status: 409,
                msg: "Contact Number Already Registered With Us !!",
                data: null
            });
        }
        let existingakshaya2 = await akshaya.findOne({ regNo });


        if (existingakshaya2) {
            return res.json({
                status: 409,
                msg: "Register Number Already Registered With Us !!",
                data: null
            });
        }
        let existingakshaya = await akshaya.findOne({ email });
        let existingvo = await voModel.findOne({ email });
        let existingstaff = await staffModel.findOne({ email });
        if (existingakshaya || existingstaff || existingvo) {
            return res.json({
                status: 409,
                msg: "Email Already Registered With Us !!",
                data: null
            });
        }
        await newAkshaya.save()
            .then(data => {
                return res.json({
                    status: 200,
                    msg: "Inserted successfully",
                    data: data
                });
            })
            .catch(err => {
                console.log(err);
                return res.json({
                    status: 500,
                    msg: "Data not Inserted",
                    data: err
                });
            });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: error.message });
    }
};



const viewAkshayaReqsForAdmin = (req, res) => {
    akshaya.find({ adminApproved: false })
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
                    msg: "No Data obtained"
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

// Update Organizer by ID
const editAkshayaById = async (req, res) => {
    let flag = 0
    const { regNo, district, pincode, panchayath, contact, email } = req.body;
    let existingAkshaya = await akshaya.find({ contact });
    let akshayaData = await akshaya.findById({ _id: req.params.id });
    await existingAkshaya.map(x => {
        if (x.contact != akshayaData.contact) {
            flag = 1
        }

    })

    if (flag == 0) {

        await akshaya.findByIdAndUpdate({ _id: req.params.id }, {
            regNo,
            district,
            pincode,
            panchayath,
            contact,
            email,
            certificate: req.file,
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
                    msg: "Data not Updated",
                    Error: err
                });
            });
    }
    else {
        return res.json({
            status: 409,
            msg: "contact Number Already Registered With Us !!",
            data: null
        });
    }
};

// View Organizer by ID
const viewAkshayaById = (req, res) => {
    akshaya.findById({ _id: req.params.id })
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

// View Organizer by ID
const viewAkshayas = (req, res) => {
    akshaya.find({ adminApproved: true })
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

// Delete Organizer by ID
const deleteAkshayaById = (req, res) => {
    akshaya.findByIdAndDelete({ _id: req.params.id })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data updated successfully",
                data: data
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                status: 500,
                msg: "No Data obtained",
                Error: err
            });
        });
};


// Accept Organizer by ID
const approveAkshayaById = (req, res) => {
    akshaya.findByIdAndUpdate({ _id: req.params.id }, { isActive: true, adminApproved: true })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data updated successfully",
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

// Accept Organizer by ID
const activateAkshayaById = (req, res) => {
    akshaya.findByIdAndUpdate({ _id: req.params.id }, { isActive: true })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data updated successfully",
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

// Accept Organizer by ID
const deActivateAkshayaById = (req, res) => {
    akshaya.findByIdAndUpdate({ _id: req.params.id }, { isActive: false })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data updated successfully",
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
// Reject Organizer by ID
const rejectAkshayaById = (req, res) => {
    akshaya.findByIdAndDelete({ _id: req.params.id })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data removed successfully",
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
// Forgot Password for Organizer
const forgotPassword = (req, res) => {
   
    akshaya.findOneAndUpdate({ email: req.body.email }, {
        password: req.body.password
    })
        .exec()
        .then(data => {
            if (data != null)
                res.json({
                    status: 200,
                    msg: "Updated successfully"
                });
            else
                res.json({
                    status: 500,
                    msg: "User Not Found"
                });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not Updated",
                Error: err
            });
        });
};

// Reset Password for Organizer
const resetPassword = async (req, res) => {
    let pwdMatch = false;

    await akshaya.findById({ _id: req.params.id })
        .exec()
        .then(data => {
            if (data.password === req.body.oldpassword)
                pwdMatch = true;
        })
        .catch(err => {
            return res.status(500).json({
                status: 500,
                msg: "Data not Updated",
                Error: err
            });
        });

    if (pwdMatch) {
        await akshaya.findByIdAndUpdate({ _id: req.params.id }, {
            password: req.body.password
        })
            .exec()
            .then(data => {
                if (data != null)
                    return res.json({
                        status: 200,
                        msg: "Updated successfully"
                    });
                else
                    return res.json({
                        status: 500,
                        msg: "User Not Found"
                    });
            })
            .catch(err => {
                return res.status(500).json({
                    status: 500,
                    msg: "Data not Updated",
                    Error: err
                });
            });
    } else {
        return res.json({
            status: 405,
            msg: "Your Old Password doesn't match"
        });
    }
};

const login = (req, res) => {
    const { email, password } = req.body;

    akshaya.findOne({ email }).then(user => {


        if (!user) {
            return res.json({ status: 405, msg: 'User not found' });
        }

        if (user.password != password) {
            return res.json({ status: 405, msg: 'Password Mismatch !!' });
        }

        if (!user.adminApproved) {
            return res.json({ status: 405, msg: 'Please wait for Admin Approval !!' });
        } if (!user.isActive) {
            return res.json({ status: 405, msg: 'You are currently deactivated By Admin !!' });
        }
        const token = createToken(user);

        res.json({
            status: 200,
            data: user,
            token
        });

    }).catch(err => {
        console.log(err);
        return res.json({ status: 500, msg: 'Something went wrong' });

    })
};



module.exports = {
    registerAkshaya,
    uploadSingle,
    viewAkshayaById,
    login,
    viewAkshayaReqsForAdmin,
    editAkshayaById,
    deleteAkshayaById,
    activateAkshayaById,
    deActivateAkshayaById,
    approveAkshayaById,
    rejectAkshayaById,
    viewAkshayas,
    forgotPassword,
    resetPassword
}
