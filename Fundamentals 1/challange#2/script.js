    // Mark Data
let markWeight = 78;
let markHeight = 1.69;

// John Data
let johnWeight = 92;
let johnHeight = 1.95;

let markBMI;
let johnBMI;
markBMI = markWeight / (markHeight**2);
johnBMI = johnWeight / (johnHeight**2);

if(markBMI > johnBMI){
    console.log(`Mark BMI (${markBMI}) is higher than John BMI (${johnBMI})`);
}
else{
    console.log(`John BMI (${johnBMI}) is higher than Mark BMI (${markBMI})`);
}

