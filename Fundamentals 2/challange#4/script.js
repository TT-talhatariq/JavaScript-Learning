const calcTip = function(bill){
    const tip = bill >= 50 && bill <=300 ? 0.15*bill: 0.2*bill;
    return tip;
    }
    
    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
    const tip = [];
    const total = [];
    for(let i=0; i<bills.length; i++){
        tip.push(calcTip(bills[i]))
        total.push(bills[i]+tip[i]);
    }

    const calAverage = function(array)
    {
        let sum = 0;
        for(let i=0; i<array.length; i++)
            sum+=array[i];
        return sum/(array.length-1)
    }
    for(let i=0; i<bills.length; i++)
         console.log(`The bill was ${bills[i]}, the tip was ${tip[i]}, and the total value ${total[i]}`);
    console.log(`Average is: ${calAverage(total)}`)    
