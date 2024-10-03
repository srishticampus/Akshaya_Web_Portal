const express = require("express");
const router = express.Router();

const Admin=require('./controllers/adminController')
const Akshaya=require('./controllers/akshayaController')
const Staff=require('./controllers/staffController')
const VillageOffice=require('./controllers/voController')


//admin
router.post('/adminResetPassword',Admin.adminResetPassword);
router.post('/adminLogin',Admin.login);


//VO
router.post('/registerVO',VillageOffice.registerVO);
router.post('/loginVO',VillageOffice.login);
router.post('/forgotPasswordVO',VillageOffice.forgotPassword);
router.post('/resetPasswordVO/:id',VillageOffice.resetPassword);
router.post('/viewVOById/:id',VillageOffice.viewVOById);
router.post('/viewVOReqsForAdmin',VillageOffice.viewVOReqsForAdmin);
router.post('/viewVOs',VillageOffice.viewVOs);
router.post('/deActivateVOById/:id',VillageOffice.deActivateVOById);
router.post('/deleteVOById/:id',VillageOffice.deleteVOById);
router.post('/approveVOById/:id',VillageOffice.approveVOById);
router.post('/editVOById/:id',VillageOffice.editVOById);
router.post('/activateVOById/:id',VillageOffice.activateVOById);




//Akshaya
router.post('/registerAkshaya',Akshaya.uploadSingle,Akshaya.registerAkshaya);
router.post('/loginAkshaya',Akshaya.login);
router.post('/forgotPasswordAkshaya',Akshaya.forgotPassword);
router.post('/resetPasswordAkshaya/:id',Akshaya.resetPassword);
router.post('/viewAkshayaById/:id',Akshaya.viewAkshayaById);
router.post('/viewAkshayaReqsForAdmin',Akshaya.viewAkshayaReqsForAdmin);
router.post('/viewAkshayas',Akshaya.viewAkshayas);
router.post('/deActivateAkshayaById/:id',Akshaya.deActivateAkshayaById);
router.post('/deleteAkshayaById/:id',Akshaya.deleteAkshayaById);
router.post('/approveAkshayaById/:id',Akshaya.approveAkshayaById);
router.post('/editAkshayaById/:id',Akshaya.editAkshayaById);
router.post('/activateAkshayaById/:id',Akshaya.activateAkshayaById);


// Staff Routes
router.post('/registerStaff', Staff.registerStaff);
router.post('/loginStaff', Staff.login);
router.post('/forgotPasswordStaff', Staff.forgotPassword);
router.post('/resetPasswordStaff/:id', Staff.resetPassword);
router.post('/viewStaffById/:id', Staff.viewStaffById);
router.post('/viewStaffs', Staff.viewStaffs);
router.post('/deActivateStaffById/:id', Staff.deActivateStaffById);
router.post('/deleteStaffById/:id', Staff.deleteStaffById);
router.post('/approveStaffById/:id', Staff.approveStaffById);
router.post('/editStaffById/:id', Staff.editStaffById);
router.post('/activateStaffById/:id', Staff.activateStaffById);

module.exports = router;


module.exports=router