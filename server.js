const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

// server used to send send emails
const app = express();
app.use(cors({
  origin: true, // Allow all origins in development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Check if required environment variables are set
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("❌ Missing required environment variables:");
  console.error("   EMAIL_USER and EMAIL_PASS must be set in .env file");
  console.error("   Please create a .env file with your email credentials");
  process.exit(1);
}

// Email configuration - using environment variables for security
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

// Verify email configuration
contactEmail.verify((error) => {
  if (error) {
    console.log("Email configuration error:", error);
  } else {
    console.log("Email service ready to send");
  }
});

// Contact form endpoint
app.post("/contact", (req, res) => {
  console.log("Contact form request received from:", req.headers.origin);
  console.log("Request body:", req.body);
  try {
    const { firstName, lastName, email, phone, message } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        code: 400, 
        status: "Missing required fields" 
      });
    }

    const name = `${firstName} ${lastName}`;
    
    const mail = {
      from: email, // Use the sender's email as 'from'
      to: process.env.EMAIL_USER,
      subject: "Contact request - Personal Portfolio",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    contactEmail.sendMail(mail, (error, info) => {
      if (error) {
        console.log("Email send error:", error);
        res.status(500).json({ 
          code: 500, 
          status: "Failed to send email",
          error: error.message 
        });
      } else {
        console.log("Email sent successfully:", info.messageId);
        res.json({ 
          code: 200, 
          status: "Message sent successfully" 
        });
      }
    });
  } catch (error) {
    console.log("Server error:", error);
    res.status(500).json({ 
      code: 500, 
      status: "Internal server error" 
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});