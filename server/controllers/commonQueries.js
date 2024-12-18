
const nodemailer = require('nodemailer');

const url = "https://hybrid.srishticampus.in/akshaya/vo-resetpwd/"
const urlakshaya = "https://hybrid.srishticampus.in/akshaya/akshaya-resetpwd/"
// Create a transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'supprot.web.application@gmail.com',
    pass: 'ukyw olqq kuql jnty'
  }
});


const testMail = (data, user) => {
  let email = data.email
  let mainUrl = url
console.log("user",user);


  if (user == "akshaya") {
    mainUrl = urlakshaya
  }
  const mailOptions = {
    from: 'supprot.web.application@gmail.com',
    to: email,
    subject: 'Reset Password From Akshaya Web Portal',
    text: `Dear User,${'\n'}please check this link : ${mainUrl}${data._id} to reset your password`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Error:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}


const forgotPWDsentMail = async (email, schema,user) => {

  try {
    data = await schema.findOne({ email: email })


    if (data != null) {
console.log(data);

      testMail(data, user)
      return (data);
    }
    else
      return (null);
  }
  catch (err) {
    console.log(err);
    return (err)
  }

}
module.exports = { forgotPWDsentMail }