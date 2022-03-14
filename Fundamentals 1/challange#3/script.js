let dolphinScoreOne = 97;
let dolphinScoreTwo = 112;
let dolphinScoreThree = 102;


let koalasScoreOne = 88;
let koalasScoreTwo = 91;
let koalasScoreThree = 110;

let dolphinAverage = (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree)/3;
let koalasAverage = (koalasScoreOne + koalasScoreTwo + koalasScoreThree)/3;

if(dolphinAverage > koalasAverage && dolphinAverage >= 100){
    console.log("Dolphin wins the Match!")
}
else if(koalasAverage > dolphinAverage && koalasAverage >= 100){
    console.log("Koalas wins the Match!")
}
else if(koalasAverage == dolphinAverage && koalasAverage>=100 && dolphinAverage>=100){
console.log("Both wins the trophy!")
}
else{
    console.log("Match Drawn!")
}




