// document.getElementById('btn-update').addEventListener('click',function(){
//    const textField = document.getElementById('input-filed');
//    const inputText =textField.value;

//    const p = document.getElementById('input-text display');
//    p.innerText = inputText;
//    inputText ='';
// });

// document.getElementById('submit-text').addEventListener('click',function(){
//    const writeText = document.getElementById('input-area');
//    // const inputText= writeText.value;

//    const p = document.getElementById('submit-successful display');
//     p.innerHTML = 'submit successful';
//     inputText.value='';
// });

document.getElementById('btn-post').addEventListener('click', function(){
    const commentArea = document.getElementById('comment-area');
    const newComment = commentArea.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText=newComment;
    commentContainer.appendChild(p);
    commentArea.value='';

})