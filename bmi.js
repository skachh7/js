function calculateBmi(){
    let weight= document.getElementById("input-number-weight").value;//Will take value from input
    let height= document.getElementById("input-number-height").value;//WIll take value from input
    let bmi=weight/(height*height);//Formula
    document.getElementById("span-result").innerHTML=bmi;//Provide results to span id in webpage.

}