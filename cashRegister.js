const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}


function checkCashRegister(price, cash, cid) {
  let changeDue = cash * 100 - price * 100;
  let changeDueCheck = changeDue;
  let status = "";
  let change = [];
  
  let cidTotal = 0;
  let filteredCidTotal = cid.filter(elem => elem[1] !== 0).reverse();

  filteredCidTotal.forEach(elem => {
    let curr = elem[0];
    let currTotal = elem[1] * 100;
    cidTotal += currTotal;
    let amount = 0;
    while (changeDue >= currencyUnit[curr] && currTotal > 0) {
      amount += currencyUnit[curr];
      //running total of change gathered from drawer
      changeDue -= currencyUnit[curr];
      //running total of change due
      currTotal -= currencyUnit[curr];
      //running total of currency still in drawer
    }
    if (amount !== 0) {
      change.push([curr, amount / 100]);
    }});

  if (changeDue > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  } else if (changeDue == 0 && changeDueCheck == cidTotal) {
    status = "CLOSED";
    change = cid;
  } else {
    status = "OPEN";
  }
  return { "status": status, "change": change };
}
