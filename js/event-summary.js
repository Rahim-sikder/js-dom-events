function handleOnClick(){
   const handleStatus = document.getElementById('handaler-status');
   handleStatus.innerText='handle the function on click  attribute'
   document.body.style.backgroundColor='red';
}
function changeSentence(){
   const changeText = document.getElementById('hello');
   changeText .innerText='My name is rahim sikder';
   document.body.style.backgroundColor='green'
}

document.getElementById('event-lisener').addEventListener('click', function(){
   const handleStatus = document.getElementById('handaler-status');
   handleStatus.innerText='kire mama'
})

// option 2 
// document.getElementById('btn-update').addEventListener('click', function(){
//    const inputFiled = document.getElementById('input-filed');
//    const inputText = inputFiled.value;
   
//    const p = document.getElementById('input-text display');
//    p.innerText= inputText;
//    inputText.value= '';
// })
document.getElementById('btn-update').addEventListener('click', function(){
   const inputFiled =document.getElementById('input-filed');
   const inputText = inputFiled.value;

   const p = document.getElementById('input-text display');
   p.innerText = inputText;
   inputText.value ='';
})