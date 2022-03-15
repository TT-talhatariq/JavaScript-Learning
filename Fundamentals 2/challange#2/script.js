const calcTip = function(bill){
const tip = bill >= 50 && bill <=300 ? 0.15*bill: 0.2*bill;
return tip;
}

const bills = [122, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [];
for(let i=0; i<bills.length; i++)
    total.push(bills[i]+tip[i]);

for(let i=0; i<bills.length; i++)
     console.log(`The bill was ${bills[i]}, the tip was ${tip[i]}, and the total value ${total[i]}`);

