const BloodBank = require("../models/BloodBank");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");


// ================= REGISTER =================
const registerBloodBank = async (req, res) => {
  try {

    const { name, email, password, phone, city, address } = req.body;

    if (!name || !email || !password || !phone || !city || !address) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const existing = await BloodBank.findOne({ email });

    if (existing) {
      return res.status(400).json({ msg: "BloodBank already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const bloodbank = new BloodBank({
      name,
      email,
      password: hashedPassword,
      phone,
      city,
      address
    });

    await bloodbank.save();

    res.status(201).json({
      msg: "BloodBank Registered Successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
};



// ================= LOGIN =================
const loginBloodBank = async (req, res) => {

  try {

    const { email, password } = req.body;

    const bloodbank = await BloodBank.findOne({ email });

    if (!bloodbank) {
      return res.status(400).json({ msg: "BloodBank not found" });
    }

    const match = await bcrypt.compare(password, bloodbank.password);

    if (!match) {
      return res.status(400).json({ msg: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: bloodbank._id },
      "redconnectsecret",
      { expiresIn: "7d" }
    );

    res.json({
      msg: "Login Success",
      token,
      bloodbank
    });

  } catch (err) {

    console.log(err);
    res.status(500).json({ msg: "Server Error" });

  }

};



// ================= SEARCH BLOOD =================
const searchBlood = async (req, res) => {

  try {

    const { city, bloodGroup } = req.body;

    const banks = await BloodBank.find({
      city: { $regex: city, $options: "i" },
      [`bloodStock.${bloodGroup}`]: { $gt: 0 }
    });

    res.json(banks);

  } catch (err) {

    console.log(err);
    res.status(500).json({ msg: "Search Error" });

  }

};



// ================= UPDATE STOCK =================
const updateBloodStock = async (req, res) => {

  try {

    const { bloodBankId } = req.params;

    const bloodbank = await BloodBank.findById(bloodBankId);

    if (!bloodbank) {
      return res.status(404).json({ msg: "BloodBank not found" });
    }

    bloodbank.bloodStock = req.body;

    await bloodbank.save();

    res.json({
      msg: "Stock Updated"
    });

  } catch (err) {

    console.log(err);
    res.status(500).json({ msg: "Server Error" });

  }

};



// ================= SEND ALERT =================
const sendAlert = async (req, res) => {

  try {

    const { patientName, bloodGroup, city, contact } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Blood Required",
      text: `
Patient: ${patientName}
Blood Group: ${bloodGroup}
City: ${city}
Contact: ${contact}
      `
    });

    res.json({ msg: "Alert Sent" });

  } catch (err) {

    console.log(err);
    res.status(500).json({ msg: "Mail Error" });

  }

};



module.exports = {
  registerBloodBank,
  loginBloodBank,
  searchBlood,
  updateBloodStock,
  sendAlert
};