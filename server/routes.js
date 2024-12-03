const express = require("express");
const router = express.Router();

const Admin=require('./controllers/adminController')
const Akshaya=require('./controllers/akshayaController')
const Staff=require('./controllers/staffController')
const VillageOffice=require('./controllers/voController')
const Complaint=require('./controllers/complaintController')
const Applicant=require('./controllers/applicantController')
const Application=require('./controllers/applicationController')
const CertificateController = require('./controllers/certificateController');
const FAQController = require('./controllers/FAQcontroller');
const feedbackController = require('./controllers/feedbackController');


//admin
router.post('/adminResetPassword',Admin.adminResetPassword);
router.post('/adminLogin',Admin.login);


//VO
router.post('/registerVO',VillageOffice.registerVO);
router.post('/loginVO',VillageOffice.login);
router.post('/forgotPasswordVO',VillageOffice.forgotPassword);
router.post('/resetPasswordVO/:id',VillageOffice.resetPassword);
router.post('/changePasswordVO/:id',VillageOffice.changePassword);
router.post('/viewVOById/:id',VillageOffice.viewVOById);
router.post('/viewVOReqsForAdmin',VillageOffice.viewVOReqsForAdmin);
router.post('/viewVOs',VillageOffice.viewVOs);
router.post('/deActivateVOById/:id',VillageOffice.deActivateVOById);
router.post('/deleteVOById/:id',VillageOffice.deleteVOById);
router.post('/approveVOById/:id',VillageOffice.approveVOById);
router.post('/editVOById/:id',VillageOffice.editVOById);
router.post('/activateVOById/:id',VillageOffice.activateVOById);
router.post('/viewActiveVos',VillageOffice.viewActiveVos);

router.post('/viewVillageByDistrict/:district',VillageOffice.viewVillageByDistrict);



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
router.post('/viewActiveAkshayas',Akshaya.viewActiveAkshayas);
router.post('/addCardData/:id',Akshaya.addCardData);


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
router.post('/viewActiveStaffs', Staff.viewActiveStaffs);
router.post('/viewStaffByVOId/:id', Staff.viewStaffByVOId);


router.post('/registerComplaint', Complaint.registerComplaint);
router.post('/viewComplaints', Complaint.viewComplaints);
router.get('/viewComplaintById/:id', Complaint.viewComplaintById);
router.delete('/deleteComplaintById/:id', Complaint.deleteComplaintById);

// Applicants
router.post('/addApplicant', Applicant.addApplicant);
router.get('/viewAllApplicants', Applicant.viewAllApplicants);
router.get('/viewApplicantById/:id', Applicant.viewApplicantById);


// Applications
router.post('/registerApplication', Application.registerApplication);
router.post('/registerApplicationwithFile',Application.upload, Application.registerApplicationwithFile);
router.post('/viewApplicationByAppNo/:appNo',Application.viewApplicationByAppNo);
router.post('/addPaymentByAppId/:id',Application.addPaymentByAppId);
router.post('/viewPendingAppByVoId/:vo',Application.viewPendingAppByVoId);
router.post('/approveByAppId/:id',Application.approveByAppId);
router.post('/viewApprovedAppByVoId/:vo',Application.viewApprovedAppByVoId);
router.post('/viewPendingTaxReqByVoId/:vo',Application.viewPendingTaxReqByVoId);
router.post('/addTaxAmountByAppId/:id',Application.addTaxAmountByAppId);
router.post('/viewAddedTaxByVoId/:vo',Application.viewAddedTaxByVoId);
router.post('/rejectByAppId/:id',Application.rejectByAppId);
router.post('/approveAppByVO/:id',Application.approveAppByVO);
router.post('/viewPendingAppByVoIdforVO/:vo',Application.viewPendingAppByVoIdforVO);
router.post('/viewAprvdAppByVoIdforVO/:vo',Application.viewAprvdAppByVoIdforVO);

// Certificates
router.post('/addCertificate', CertificateController.addCertificate);
router.post('/viewAllCertificates', CertificateController.viewAllCertificates);
router.post('/viewCertificateById/:id', CertificateController.viewCertificateById);
router.post('/viewCertificatesByType/:type', CertificateController.viewCertificatesByType);
router.post('/viewCertificateByVoId/:id', CertificateController.viewCertificateByVoId);

// FAQ
router.post('/addFAQ', FAQController.registerFAQ);
router.post('/editFAQById', FAQController.editFAQById);
router.post('/deleteFAQById/:id', FAQController.deleteFAQById);
router.post('/viewFAQs', FAQController.viewFAQs);
router.post('/viewFAQById/:id', FAQController.viewFAQById);


// Feedback
router.post('/registerFeedback', feedbackController.registerFeedback);
router.post('/viewFeedbacks', feedbackController.viewFeedbacks);

module.exports = router;

