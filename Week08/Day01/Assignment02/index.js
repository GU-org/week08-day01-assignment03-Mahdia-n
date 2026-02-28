function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
   
    let yearsRemaining = 90 - age;
    
    let weeksRemaining = yearsRemaining * 52;
    
    /* we can count days and months as well*/
    let daysRemaining = yearsRemaining *365;
    let monthsRemaining = yearsRemaining * 12;


    console.log("Your remained life in week is " +weeksRemaining);
    console.log("Your remained life in day, week, and month is " +daysRemaining +" days " +weeksRemaining +" weeks " +monthsRemaining +" months.");
    
    
    
/*************Don't change the code below**********/
}
lifeInWeeks(45);
