const Mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height : 1.69,
    
    calcBMI : function(){
        const BMI = this.mass/(this.height**2);
        return BMI;
    }
};

const John = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95, 

    calcBMI : function(){
        const BMI = this.mass/(this.height**2);
        return BMI;
    }
};

if(John.calcBMI() >= Mark.calcBMI() ){
    console.log(`${John.firstName}'s BMI (${John.calcBMI()}) is higher than ${Mark.firstName}'s BMI (${Mark.calcBMI()})`)
}
else
    console.log(`${Mark.firstName}'s BMI (${Mark.calcBMI()}) is higher than ${John.firstName}'s BMI (${John.calcBMI()})`)
