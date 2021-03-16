/**---------------------------------Calculating Procuction Output-------------------------------------------------------------------- */
const INPUT = document.querySelectorAll("input");
const COMMENT = document.querySelectorAll(".comment");
console.log (INPUT);

function hourlyproduction() {
var a = document.getElementById("filledStart").value;
var b = document.getElementById("filledEnd").value;
var d = document.getElementById("container").value;
var f = document.getElementById("drawn").value; 
var bootlesFilled = b - a ;
var hlDrwan = bootlesFilled * (d/100000) ;
var lineEfficiency = ( hlDrwan / f) * 100;
var runningTime = (60 * lineEfficiency) / 100;
var downTime = 60 - runningTime;
document.getElementById("output").innerHTML = "Result for the hourly run production:"; 
document.getElementById("result").innerHTML = "Number of bottles filled: " + bootlesFilled + " bottles"; 
document.getElementById("result2").innerHTML = " Actual HL drawn from Brew House: " + hlDrwan + "hL";
document.getElementById("result3").innerHTML = " Line Efficency: " + Math.round(lineEfficiency) + "%";
document.getElementById("result4").innerHTML = " Down Time: " + Math.round(downTime) + "min";
if (a==="" && b ===""){
  alert("Fill in the values for both start and end of production hour")
 
}
else if (a === ""){
  alert("Fill in the value for the start of production hour")
}
else if (b === ""){
  alert("Fill in the value for the end of production hour")
}
else if (b-a > 40000 ){
  alert("Difference between start count and end count is large than target value 40,000: Check your Input values")
}
else ("")
return a,b,d;   
};
const CAL = document.querySelector("input#calculate");
CAL.addEventListener("click", hourlyproduction, false);
console.log(CAL)
/*-----------------------------------------------------------SUBMIT BUTTON-----------------------------------------*/
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form have been submitted")
  const request = new XMLHttpRequest();
  request.open("post", "calculation.php");
  request.onload= function (){
    console.log(request.responseText);
  }
  request.send(new FormData(form));
})
/**--------------------------------------Changing Images Function-------------------------------------------------------- */
/*var images = [];
 var i = 0
 //changing time
var time = 10000
//Images path to change
images[0]="/Images/trophy.jpg"
images[1]="/Images/hero.jpg"
images[2]="/Images/budwieser.jpg"
// fuction to change the image
 function changeImage(){
   document.slide.src = images[i]
   if (i < images.length - 1){
     i++;
   }
   else {i=0}
setTimeout("changeImage()", time)
 }
 window.onload = changeImage*/