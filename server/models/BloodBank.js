const mongoose = require("mongoose");

const bloodStockSchema = new mongoose.Schema({
  "A+": { type: Number, default: 0 },
  "B+": { type: Number, default: 0 },
  "O+": { type: Number, default: 0 },
  "AB+": { type: Number, default: 0 },
  "A-": { type: Number, default: 0 },
  "B-": { type: Number, default: 0 },
  "O-": { type: Number, default: 0 },
  "AB-": { type: Number, default: 0 },
});

const bloodBankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  bloodStock: {
    type: bloodStockSchema,
    default: () => ({}),
  },
});

module.exports = mongoose.model("BloodBank", bloodBankSchema);