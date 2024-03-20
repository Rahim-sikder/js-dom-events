// //step1 :  add eventListener to the post
// document.getElementById('btn-post').addEventListener('click',function(){

//    // step2: get the comment inside text Area
//    const commentBox = document.getElementById('new-comment');
//    const newComment = commentBox.value;

//    // step3:  set the comment inside the comment container 
//    // step1: get the comment container
//    // step2:create a new element
//    // step3:set the text comment as innertext of the  p tag
//    // step4: add the p tag usign appendChild
//     const commentContainer = document.getElementById('comment-container')
//     const p = document.createElement('p');
//     p.innerText =newComment;
//     commentContainer.appendChild(p);

//    //  step4: comment clear
//    commentBox.value='';

// });
// document.getElementById('btn-post').addEventListener('click', function(){
//    const commentBox =document.getElementById('new-comment');
//    const newComment = commentBox.value ;

//    const commentContainer = document.getElementById('comment-container');
//    const p =document.createElement('p');
//    p.innerText = newComment;
//    commentContainer.appendChild(p);
//    commentBox.value='';

// })

document.getElementById('btn-post').addEventListener('click',function(){
   const commentBox = document.getElementById('new-comment');
   const newComment = commentBox.value;

   const commentContainer = document.getElementById('comment-container');
   const p = document.createElement('p');
   p.innerText =newComment;
   commentContainer.appendChild(p);
   commentBox.value ='';

})