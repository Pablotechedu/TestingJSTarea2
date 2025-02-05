function convertCurrency() {
  const inputAmount = parseFloat(document.getElementById("inputAmount").value);
  const inputCurrency = document.getElementById("inputCurrency").value;

  const rates = {
    RUB: { RUB: 1, CNY: 0.078, USD: 0.011 },
    CNY: { RUB: 12.82, CNY: 1, USD: 0.14 },
    USD: { RUB: 91.27, CNY: 7.18, USD: 1 },
  };

  const rubles = inputAmount * rates[inputCurrency].RUB;
  const yuan = inputAmount * rates[inputCurrency].CNY;
  const dollars = inputAmount * rates[inputCurrency].USD;

  document.getElementById("rubValue").innerText = `${rubles.toFixed(2)} RUB`;
  document.getElementById("yuanValue").innerText = `${yuan.toFixed(2)} CNY`;
  document.getElementById("usdValue").innerText = `${dollars.toFixed(2)} USD`;
}
