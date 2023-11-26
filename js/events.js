// option one.........
function makeRed (){
   document.body.style.backgroundColor='red'
 }
 function makeYellow (){
   document.body.style.backgroundColor='yellow'
 }
 function green(){
  document.body.style.backgroundColor='green';
 }

//  option two...........
 const makeBlue = document.getElementById('make-blue');
 makeBlue.onclick =blue;

 function blue(){
   document.body.style.backgroundColor='blue';
 }

 const pickColor =document.getElementById('pick-color');
 pickColor.onclick =pink;

 function pink(){
  document.body.style.backgroundColor='pink';
 }
//  option 3
const purpleButton = document.getElementById('purple-color')
purpleButton.addEventListener('click',makePurple );

function makePurple(){
  document.body.style.backgroundColor='purple';
}
//another option 3 
const orangeButton = document.getElementById('orange-color');
orangeButton.addEventListener('click', function makeOrange(){
  document.body.style.backgroundColor='orange';
})

// most of the time  use this type
document.getElementById('goldenrod-color').addEventListener('click', function(){
  document.body.style.backgroundColor='goldenrod';
})