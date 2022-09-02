// https://www.omnicalculator.com/finance/profitability-index

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const profitabilityindexRadio = document.getElementById('profitabilityindexRadio');
const initialinvestmentRadio = document.getElementById('initialinvestmentRadio');
const pVoffuturecashflowRadio = document.getElementById('pVoffuturecashflowRadio');

let profitabilityindex;
let initialinvestment = v1;
let pVoffuturecashflow = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

profitabilityindexRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial investment';
  variable2.textContent = 'PV of future cash flow';
  initialinvestment = v1;
  pVoffuturecashflow = v2;
  result.textContent = '';
});

initialinvestmentRadio.addEventListener('click', function() {
  variable1.textContent = 'Profitability index';
  variable2.textContent = 'PV of future cash flow';
  profitabilityindex = v1;
  pVoffuturecashflow = v2;
  result.textContent = '';
});

pVoffuturecashflowRadio.addEventListener('click', function() {
  variable1.textContent = 'Profitability index';
  variable2.textContent = 'Initial investment';
  profitabilityindex = v1;
  initialinvestment = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(profitabilityindexRadio.checked)
    result.textContent = `Profitability index = ${computeprofitabilityindex().toFixed(2)}`;

  else if(initialinvestmentRadio.checked)
    result.textContent = `Initial investment = ${computeinitialinvestment().toFixed(2)}`;

  else if(pVoffuturecashflowRadio.checked)
    result.textContent = `PV of future cash flow = ${computepVoffuturecashflow().toFixed(2)}`;
})

// calculation

function computeprofitabilityindex() {
  return Number(pVoffuturecashflow.value) / Number(initialinvestment.value);
}

function computeinitialinvestment() {
  return Number(pVoffuturecashflow.value) / Number(profitabilityindex.value);
}

function computepVoffuturecashflow() {
  return Number(profitabilityindex.value) * Number(initialinvestment.value);
}