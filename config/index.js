const EUR_TO_DOP = 59.41;
const DOP_TO_EUR = 0.017;
const exchangeData = [
  {
    currency: "EUR",
    exchange: ["EUR", "DOP"],
    amount: EUR_TO_DOP,
  },
  {
    currency: "DOP",
    exchange: ["DOP", "EUR"],
    amount: DOP_TO_EUR,
  },
];

module.exports = {
  exchangeData,
};
