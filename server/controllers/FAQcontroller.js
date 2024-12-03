const FAQModel = require('../models/FAQModel');

const defaultFaqs = [
    {
      question: "What is Akshaya Portal?",
      answer: "Akshaya Portal is a comprehensive platform providing various services like property management, Aadhaar enrollment, and PAN card services. It aims to streamline access to essential government and administrative services for users."
    },
    {
      question: "How do I register on the Akshaya Portal?",
      answer: "To register, visit the homepage and click the “Register” button. Fill out the required details, including your name, email, and phone number. Once submitted, you’ll receive a confirmation email to verify your account."
    },
    {
        question: "How can I check the status of my application on Akshaya Portal?",
        answer: "After logging in, navigate to ‘My Applications.’ Here, you can view the status of each request submitted. You'll find updates on whether your applications are pending, approved, or rejected."
      },
      {
        question: "What services are offered under Property & Land Management?",
        answer: "The portal provides services such as property valuation, ownership transfer, and documentation assistance. Users can manage their property-related needs efficiently through this platform."
      },
      {
        question: "What services are offered under Property & Land Management?",
        answer: "The portal provides services such as property valuation, ownership transfer, and documentation assistance. Users can manage their property-related needs efficiently through this platform.."
      },
      {
        question: "How can I apply for property-related services?",
        answer: "Select ‘Property & Land Management’ from the service menu. Choose your desired service, fill in the necessary information, and submit your request along with required documents."
      },
      {
        question: "Can I enroll for a new Aadhaar card through Akshaya Portal?",
        answer: "Yes, the portal allows new Aadhaar enrollment. Users can select ‘Aadhaar Enrollment’ and follow the provided instructions to complete the application process."
      }
  ];

const addDefaultFaq=async()=>{
    const count = await FAQModel.countDocuments();
    if (count === 0) {
      await FAQModel.insertMany(defaultFaqs);
      console.log("Default FAQs added.");
    } else {
      console.log("FAQs already initialized.");
    }
}


// Register FAQ
const registerFAQ = async (req, res) => {
    try {
        const { question,answer } = req.body;

        // Create a new FAQ document
        const newFAQ = new FAQModel({
            question,answer

        });

        await newFAQ.save();
        return res.json({
            status: 200,
            msg: "FAQ registered successfully",
            data: newFAQ
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            status: 500,
            msg: "Error registering FAQ",
            error: error.message
        });
    }
};

// View All Active FAQs
const viewFAQs = async (req, res) => {
    try {
        const FAQs = await FAQModel.find().sort({ createdAt: 1 }).exec();
        return res.json({
            status: 200,
            msg: "FAQs obtained successfully",
            data: FAQs
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Failed to retrieve FAQs",
            error: error.message
        });
    }
};

// View FAQ by ID
const viewFAQById = async (req, res) => {
    try {
        const FAQ = await FAQModel.findById(req.params.id).exec();
        if (FAQ) {
            return res.json({
                status: 200,
                msg: "FAQ obtained successfully",
                data: FAQ
            });
        } else {
            return res.json({
                status: 404,
                msg: "FAQ not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error retrieving FAQ",
            error: error.message
        });
    }
};



// Delete FAQ by ID
const deleteFAQById = async (req, res) => {
    try {
        const deletedFAQ = await FAQModel.findByIdAndDelete(req.params.id).exec();
        if (deletedFAQ) {
            return res.json({
                status: 200,
                msg: "FAQ deleted successfully",
                data: deletedFAQ
            });
        } else {
            return res.json({
                status: 404,
                msg: "FAQ not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error deleting FAQ",
            error: error.message
        });
    }
};



// view FAQ by Akshaya ID
const editFAQById = async (req, res) => {

    try {
        const updatedFaqs = req.body; 

     
        for (const faq of updatedFaqs) {
            await FAQModel.findByIdAndUpdate(faq._id, { answer: faq.answer });
        }

        return res.status(200).json({ status: 200,
             message: 'FAQs updated successfully!' });
    


 
    } catch (error) {
        res.status(500).json({
            status: 500,
            msg: "Error activating FAQ",
            error: error.message
        });
    }
};

module.exports = {
    registerFAQ,
    viewFAQs,
    viewFAQById,
    deleteFAQById,
    addDefaultFaq,
    editFAQById
};
