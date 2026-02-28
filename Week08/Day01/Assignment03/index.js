function bmiCalc(w,h){
    let bmi= w/(h*h);

    return bmi;

}

var weight=Number(prompt("Please enter you weight in kg"));
var height=Number(prompt("Please enter your height in m"));
let bmi=bmiCalc(weight,height);
alert("Your bmi is "+bmi);