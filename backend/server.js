const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();

// ================= MIDDLEWARE =================

app.use(cors());
app.use(express.json());


// ================= TEST ROUTE =================

app.get("/", (req, res) => {
  res.send("World Wise backend is running");
});


// ================= CONTACT FORM API =================

app.post("/api/contact", (req, res) => {

  console.log("Received contact form data:");
  console.log(req.body);

  const {
    full_name,
    email,
    phone,
    preferred_time,
    course,
    message
  } = req.body;


  // Validation
  if (!full_name || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name and phone number are required"
    });
  }


  // SQL Query
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


  // Save into MySQL
  db.query(sql, values, (err, result) => {

    if (err) {

      console.log("Database error:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to save contact form",
        error: err.message
      });
    }


    console.log("Contact form saved successfully!");
    console.log("Inserted ID:", result.insertId);


    res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully",
      id: result.insertId
    });

  });

});


// ================= START SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});