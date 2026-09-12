const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
  res.send("World Wise backend is running");
});


// Contact form API
app.post("/api/contact", (req, res) => {
  const {
    full_name,
    email,
    phone,
    preferred_time,
    course,
    message
  } = req.body;

  if (!full_name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name and phone number are required"
    });
  }

  const sql = `
    INSERT INTO contact_messages
    (
      full_name,
      email,
      phone,
      preferred_time,
      course,
      message
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    full_name,
    email || null,
    phone,
    preferred_time || null,
    course || null,
    message || null
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.log("Database error:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to save contact form"
      });
    }

    res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully",
      id: result.insertId
    });
  });
});
// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});