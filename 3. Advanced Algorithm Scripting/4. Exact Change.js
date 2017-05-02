// ======= Exact Change ======== //

// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
//
// Otherwise, return change in coin and bills, sorted in highest to lowest order.


function checkCashRegister(price, cash, cid) {
  var change, totalCashInDrawer, eachDenom, eachAmount, value, z;
  change = cash - price;
  totalCashInDrawer = 0;
  var finalChangeArray = [];
  var coins = ["QUARTER", "DIME", "NICKEL", "PENNY"];

  for(var i = cid.length - 1; i >= 0; i--) {
    eachDenom = cid[i][0];
    eachAmount = cid[i][1];
    totalCashInDrawer += eachAmount;
    console.log("Current change: " + change + " eachAmount: " + eachAmount);

    if(change === eachAmount) {
      finalChangeArray.push(cid[i]);
      break;
    } else if (change > eachAmount && eachAmount != 0) {
      finalChangeArray.push(cid[i]);
      change -= eachAmount;
      change = change.toFixed(2);
    } else {
      if((change < 1 && coins.indexOf(eachDenom) >= 0) && eachAmount != 0) {
        value = getDenomValue(eachDenom);
        z = change / value;
        console.log("z: " + z);
        if (z >= 1) {
          z = Math.floor(z);
          change = change - (z * value);
          change = change.toFixed(2);
          finalChangeArray.push([eachDenom, z * value]);
        }
      } else if (change >= 1 && coins.indexOf(eachDenom) < 0) {
        if (change >= eachAmount) {
          finalChangeArray.push([eachDenom, change]);
          change -= eachAmount;
          change = change.toFixed(2);
        } else {
          value = getDenomValue(eachDenom);
          z = change / value;
          console.log("z: " + z);
          if (z >= 1) {
            z = Math.floor(z);
            console.log("z: " + z );
            change = change - (z * value);
            change = change.toFixed(2);
            finalChangeArray.push([eachDenom, z * value]);
          }
        }
      }
    }
  }

  if (totalCashInDrawer === change) {
    return "Closed";
  }

  if (change > 0) {
    return "Insufficient Funds";
  }

  return finalChangeArray;
}

function getDenomValue(eachDenom) {
  switch (eachDenom) {
    case "ONE HUNDRED":
      return 100;
    case "TWENTY":
      return 20;
    case "TEN":
      return 10;
    case "FIVE":
      return 5;
    case "ONE":
      return 1;
    case "QUARTER":
      return .25;
    case "DIME":
      return .10;
    case "NICKEL":
      return .05;
    case "PENNY":
      return .01;
  }
}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// should return an array //
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// should return a string //
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// should return a string //
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// should return [["QUARTER", 0.50]] //
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]] //
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// should return "Insufficient Funds" //
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// should return "Insufficient Funds" //
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// should return "Closed" //
