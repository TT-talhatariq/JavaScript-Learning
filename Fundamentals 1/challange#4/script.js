billValue = 275;
const tip = billValue >= 50 && billValue <=300 ? (15*billValue)/100: (20*billValue)/100;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue+tip}`);