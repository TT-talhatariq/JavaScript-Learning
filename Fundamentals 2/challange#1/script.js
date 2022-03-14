'use strict';
function calcAverage(a,b,c){
    return (a+b+c)/3;
}
function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= avgKoalas*2)
            return true;
    else return false;
}
function result(sc1,sc2,sc3, sr1,sr2,sr3){
    let avgDolphins = calcAverage(sc1, sc2, sc3);
    let avgKoalas = calcAverage(sr1, sr2, sr3);

    if(checkWinner(avgDolphins, avgKoalas))
        console.log("Dolphins wins!");
    else console.log("Koalas wins!");
    
}

result(44, 23 ,71, 65, 54, 49);
    