const ApplicationModel = require('../models/applicationModel');
const multer = require("multer");



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
const upload = multer({ storage: storage }).fields([
    { name: 'doc1', maxCount: 1 },  // For Profile Picture
    { name: 'doc2', maxCount: 1 }  ,
    { name: 'doc3', maxCount: 1 }      // For ID Proof
  ]);

// Register Application
const registerApplication = async (req, res) => {
    try {
        const data = req.body;
       
console.log(data);

// if p-tax

if(req.body.applicationType=="Property Tax"){
    const pTax = await ApplicationModel.findOne({
        voId:req.body.voId,
        applicationType: req.body.applicationType,
        ward:req.body.ward,
        door:req.body.door})

        if(pTax){
            return res.json({
                status: 201,
                msg: "Tax Already Exists",
                tax:pTax
                });
        }
}



// p-tax ends







        // Create a new Application document
        const newApplication = new ApplicationModel({
          ...data,
          

        });

        await newApplication.save();
        return res.json({
            status: 200,
            msg: "Application registered successfully",
            data: newApplication
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error registering Application",
            error: error.message
        });
    }
};


const registerApplicationwithFile = async (req, res) => {

    const doc1 = req.files.doc1[0]
    const doc2 = req.files.doc2? req.files.doc2[0]:null
    const doc3 = req.files.doc3?req.files.doc3[0]:null

    try {
        const data = req.body;
       
console.log(data);

        // Create a new Application document
        const newApplication = new ApplicationModel({
          ...data,
          
doc1,
doc2,
doc3
        });

        await newApplication.save();
        return res.json({
            status: 200,
            msg: "Application registered successfully",
            data: newApplication
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error registering Application",
            error: error.message
        });
    }
};
// View All Active Applications
const viewApplications = async (req, res) => {
    try {
        const Applications = await ApplicationModel.find().sort({ createdAt: 1 }).exec();
        return res.json({
            status: 200,
            msg: "Applications obtained successfully",
            data: Applications
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to retrieve Applications",
            error: error.message
        });
    }
};

// View Application by ID
const viewApplicationById = async (req, res) => {
    try {
        const Application = await ApplicationModel.findById(req.params.id).exec();
        if (Application) {
            return res.json({
                status: 200,
                msg: "Application obtained successfully",
                data: Application
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error retrieving Application",
            error: error.message
        });
    }
};


const viewApplicationByAppNo = async (req, res) => {
    try {
        const appId = await ApplicationModel.findOne({appNo:req.params.appNo},{_id:1}).exec();

        const Application = await ApplicationModel.findById(appId)
        .populate('applicantId')
        .populate('vo').exec();
        if (Application) {
            return res.json({
                status: 200,
                msg: "Application obtained successfully",
                data: Application
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found"
            });
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error retrieving Application",
            error: error.message
        });
    }
};

// Delete Application by ID
const deleteApplicationById = async (req, res) => {
    try {
        const deletedApplication = await ApplicationModel.findByIdAndDelete(req.params.id).exec();
        if (deletedApplication) {
            return res.json({
                status: 200,
                msg: "Application deleted successfully",
                data: deletedApplication
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error deleting Application",
            error: error.message
        });
    }
};



// view Application by Akshaya ID
const viewApplicationByAkshayaId = async (req, res) => {
    try {
        const activatedApplication = await ApplicationModel.find(
            { akshayaId: req.params.id }

        ).exec();

        if (activatedApplication) {
            return res.json({
                status: 200,
                msg: "Application activated successfully",
                data: activatedApplication
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found",
                data: []
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error activating Application",
            error: error.message
        });
    }
};
// view pending App by VOID
const viewPendingAppByVoId = async (req, res) => {
    try {
        const activatedApplication = await ApplicationModel.find(
            { vo: req.params.vo ,
                applicationType: { $ne: "Property Tax" },
               status:"Pending"
            }

        ).populate('applicantId').exec();

        if (activatedApplication) {
            return res.json({
                status: 200,
                msg: "Application activated successfully",
                data: activatedApplication
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error activating Application",
            error: error.message
        });
    }
};
const viewPendingTaxReqByVoId = async (req, res) => {
    try {
        const activatedApplication = await ApplicationModel.find(
            { vo: req.params.vo ,
                applicationType: "Property Tax",
                status:"Pending"
            }

        ).populate('applicantId').exec();

        if (activatedApplication) {
            return res.json({
                status: 200,
                msg: "Application activated successfully",
                data: activatedApplication
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error activating Application",
            error: error.message
        });
    }
};
const viewAddedTaxByVoId = async (req, res) => {
    try {
        const activatedApplication = await ApplicationModel.find(
            { vo: req.params.vo ,
                applicationType: "Property Tax",
                status: { $ne: "Pending" }
            }

        ).populate('applicantId').exec();

        if (activatedApplication) {
            return res.json({
                status: 200,
                msg: "Application activated successfully",
                data: activatedApplication
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error activating Application",
            error: error.message
        });
    }
};
const viewApprovedAppByVoId = async (req, res) => {
    console.log("vo",req.params.vo);
    
    try {
        const activatedApplication = await ApplicationModel.find(
            { vo: req.params.vo ,
                applicationType: { $ne: "Property Tax" },
                status: { $ne: "Pending" }
            }

        ).populate('applicantId').exec();

        if (activatedApplication) {
            return res.json({
                status: 200,
                msg: "Application activated successfully",
                data: activatedApplication
            });
        } else {
            
            return res.json({
                status: 404,
                msg: "Application not found",
                data: []
            });
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error activating Application",
            error: error.message
        });
    }
};
// view Application by Akshaya ID
const addPaymentByAppId = async (req, res) => {
    try {
        const activatedApplication = await ApplicationModel.findByIdAndUpdate(
            { _id: req.params.id },
            {
                paymentStatus:true,
                amount:req.body.amount
            }

        ).exec();

        if (activatedApplication) {
            return res.json({
                status: 200,
                msg: "Application activated successfully",
                data: activatedApplication
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found",
                data: []
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error activating Application",
            error: error.message
        });
    }
};
const addTaxAmountByAppId = async (req, res) => {
    try {
        const activatedApplication = await ApplicationModel.findByIdAndUpdate(
            { _id: req.params.id },
            {
                amount:req.body.amount,
                status:'On Process'
            }

        ).exec();

        if (activatedApplication) {
            return res.json({
                status: 200,
                msg: "Application activated successfully",
                data: activatedApplication
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found",
                data: []
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error activating Application",
            error: error.message
        });
    }
};
const approveByAppId = async (req, res) => {
    try {
        const activatedApplication = await ApplicationModel.findByIdAndUpdate(
            { _id: req.params.id },
            {
                status:"On Process"
            }

        ).exec();

        if (activatedApplication) {
            return res.json({
                status: 200,
                msg: "Application activated successfully",
                data: activatedApplication
            });
        } else {
            return res.json({
                status: 404,
                msg: "Application not found",
                data: []
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error activating Application",
            error: error.message
        });
    }
};
module.exports = {
    registerApplication,
    viewApplications,
    viewApplicationById,
    deleteApplicationById,
registerApplicationwithFile,
upload,
addTaxAmountByAppId,
    viewApplicationByAkshayaId,
    viewApplicationByAppNo,
    addPaymentByAppId,
    viewPendingAppByVoId,
    approveByAppId,
    viewPendingTaxReqByVoId,
    viewApprovedAppByVoId,
    viewAddedTaxByVoId
};
