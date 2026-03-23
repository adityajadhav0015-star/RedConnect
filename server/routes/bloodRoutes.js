const express = require("express");
const router = express.Router();

const {
  registerBloodBank,
  loginBloodBank,
  searchBlood,
  updateBloodStock,
  sendAlert
} = require("../controllers/bloodController");

router.post("/register", registerBloodBank);
router.post("/login", loginBloodBank);
router.post("/search", searchBlood);
router.post("/alert", sendAlert);
router.put("/stock/:bloodBankId", updateBloodStock);

module.exports = router;
