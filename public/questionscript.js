let reveal = false;
var button = document.getElementById('revealans');
var answers = document.getElementById('answerslist');
button.addEventListener('click',()=>{
    reveal = !reveal;
    if(reveal){answers.style.display = 'block';} else if(!reveal){
        answers.style.display = 'none'
    }
})
