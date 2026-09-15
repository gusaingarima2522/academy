const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();

// ================= MIDDLEWARE =================

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());


// ================= TEST ROUTE =================

app.get("/", (req, res) => {
  res.send("World Wise backend is running");
});


// ================= CONTACT FORM API =================

app.post("/api/contact", (req, res) => {

  console.log("=================================");
  console.log("CONTACT FORM REQUEST");
  console.log("Body:", req.body);
  console.log("=================================");

  const {
    full_name,
    email,
    phone,
    preferred_time,
    course,
    message
  } = req.body || {};


  // ================= CLEAN DATA =================

  const cleanName = String(full_name || "").trim();
  const cleanEmail = String(email || "").trim();
  const cleanPhone = String(phone || "").trim();
  const cleanPreferredTime = String(preferred_time || "").trim();
  const cleanCourse = String(course || "").trim();
  const cleanMessage = String(message || "").trim();


  // ================= VALIDATION =================

  if (!cleanName) {
    return res.status(400).json({
      success: false,
      message: "Please enter your full name"
    });
  }

  if (!cleanPhone) {
    return res.status(400).json({
      success: false,
      message: "Please enter your phone number"
    });
  }


  // ================= PHONE VALIDATION =================

  // Remove spaces, +, -, brackets etc.
  const phoneDigits = cleanPhone.replace(/\D/g, "");

  if (phoneDigits.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid phone number"
    });
  }


  // ================= SQL QUERY =================

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
    cleanName,
    cleanEmail || null,
    cleanPhone,
    cleanPreferredTime || null,
    cleanCourse || null,
    cleanMessage || null
  ];


  // ================= SAVE TO MYSQL =================

  db.query(sql, values, (err, result) => {

    if (err) {

      console.error("Database error:", err);

      return res.status(500).json({
        success: false,
        message: "Failed to save contact form",
        error: err.message
      });
    }


    console.log("Contact form saved successfully!");
    console.log("Inserted ID:", result.insertId);


    return res.status(201).json({
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
