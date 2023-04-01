// server/sendEmail.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (name, phoneNumber, email, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'speedyysiren@gmail.com',
    subject: 'New message from your website',
    text: `Name: ${name}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
