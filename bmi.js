function calculateBmi(){
    let weight= document.getElementById("input-number-weight").value;//Will take value from input
    let height= document.getElementById("input-number-height").value;//WIll take value from input
    let bmi=weight/(height*height);//Formula
    document.getElementById("span-result").innerHTML=bmi;//Provide results to span id in webpage.
    if (bmi<18.5){
        document.getElementById("span-result").style.color = "red";
        }
        else if (bmi>=18.5 && bmi<=29.5 ){
        document.getElementById("span-result").style.color = "green";
        }
        else{
        document.getElementById("span-result").style.color = "orange";
        
        }
        
/* //When we cahnge value in weight or height input then we call an event and update the value in it.
function handleWeightInput(event){
    document.getElementById("input-number-weight").value=event.target.value;
}

function handleHeightInput(event){
    document.getElementById("input-number-height").value=event.target.value;
}
 */

function handleInputChange(event){
    document.getElementsByName("event.target.name").value=event.target.value;
}
}
