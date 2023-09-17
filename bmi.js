function calculateBmi(){
    let weight= document.getElementById("input-number-weight").value;
    let height= document.getElementById("input-number-height").value;
    let bmi=weight/(height*height);
    document.getElementById("span-result").innerHTML=bmi;

}