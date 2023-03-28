const { exchangeData } = require("../config");

class Exchange {
  async getExchange(req, res) {
    const { amount, exchangeCurrency } = await req.body;
    const exchange = exchangeData.find((ex) =>
      this.sameArray(ex.exchange, exchangeCurrency)
    );
    console.log("El verdadero cambio: ", exchangeCurrency);
    console.log("El cambio: ", exchangeData[0].exchange);

    const total = amount * exchange.amount;
    res.send({
      exchange: exchangeCurrency,
      amountExchange: Number(total, 0),
    });
  }

  sameArray(arr1 = [], arr2 = []) {
    return arr1.every((element, i) => element == arr2[i]);
  }
}

module.exports = new Exchange();
