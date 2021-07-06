const init = () => {

let element = document.querySelector('#counter');
let counter = 1
function change() {
  //console.log(parseInt(element.textContent))
element.innerHTML = counter++
}
let repeatTimer = window.setInterval(change, 1000);

let pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click', (event) => {
  console.log(event.target);
  if (pauseButton.innerText ==='pause') {
  clearInterval(repeatTimer);
  document.getElementById('heart').disabled = true;
  document.getElementById('minus').disabled = true;
  document.getElementById('plus').disabled = true;
 document.getElementById('submit').disabled = true;


 pauseButton.innerText= "resume"


}else if(pauseButton.innerText === 'resume') {
  window.setInterval(change, 1000);
  document.getElementById('heart').disabled = false;
  document.getElementById('minus').disabled = false;
  document.getElementById('plus').disabled = false;
 document.getElementById('submit').disabled = false;


 pauseButton.innerText= "pause";
}})

let increaseButton = document.querySelector
('#plus');
let decreaseButton = document.querySelector('#minus');

let likeButton = document.querySelector('#heart');
increaseButton.addEventListener('click', ()=> {
  counter = counter;
  counter++


})
decreaseButton.addEventListener('click', ()=> {
  clearInterval(repeatTimer);

  counter = counter;
  counter--;

})

likeButton.addEventListener('click', () => {
 let likesList = document.getElementsByClassName('likes')[0]
 console.log(likesList);
 let likeList = document.createElement('li');
 likeList.innerHTML = `${counter} has been liked 1 time`

likesList.appendChild(likeList);

})

let inputForm = document.getElementById('comment-form');

inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let messageText = event.target.children[0].value;
    let paragraphText = document.createElement('p');
    paragraphText.innerText = messageText;
    let messageContainer = document.getElementById('list');
    messageContainer.appendChild(paragraphText);
  });


}
window.addEventListener('DOMContentLoaded',init)
