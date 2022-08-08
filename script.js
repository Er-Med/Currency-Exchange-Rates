const currencyElOne = document.getElementById("currency-one");
const currencyElTwo = document.getElementById("currency-two");
const amountElOne = document.getElementById("amount-one");
const amountElTwo = document.getElementById("amount-two");

const swap = document.getElementById('btn');
const btn = document.getElementById('btn');
const rateEl = document.getElementById('rate');
console.log(swap);

function calculate(){
  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`).then(res => res.json()).then(data => {
    const rate = data.rates[currencyTwo];    
    rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

    amountElTwo.value = (rate * amountElOne.value).toFixed(2);
  });
}
calculate()
currencyElOne.addEventListener('change', calculate);
currencyElTwo.addEventListener('change', calculate);

amountElOne.addEventListener('input', calculate);
swap.addEventListener('click', function(){
  const emt = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = emt;
  calculate()
})
