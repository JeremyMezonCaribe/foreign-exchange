var express = require("express");
const exchangeController = require("../controllers/exchangeController");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Esta funcionando");
});
router.post("/exchange", function (req, res) {
  exchangeController.getExchange(req, res);
});

module.exports = router;
