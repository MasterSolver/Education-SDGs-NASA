let bon = document.querySelector('.bon');
let body = document.querySelector('body');
let audio = document.querySelector('#audio');
bon.onclick = function(){
  body.classList.toggle('on');
  audio.play();
}

