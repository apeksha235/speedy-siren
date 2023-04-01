// server/index.js
app.post('/send-email', async (req, res) => {
    const { name, phoneNumber, email, emailPassword, message } = req.body;
  
    try {
      await sendEmail(name, phoneNumber, email, emailPassword, message);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  });
  
