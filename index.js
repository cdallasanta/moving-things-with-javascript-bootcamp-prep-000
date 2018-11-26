const app = "I don't do much."

let dodger = document.querySelector('#dodger');

document.addEventListener('keydown', function(event){
  if(event.which === 37 && dodger.style.left !== '0px'){
    moveDodgerLeft();
  } else if (event.which === 39){
    let leftString = dodger.style.left.replace('px','');
    let leftNum = parseInt(leftString);
    dodger.style.left = `${leftNum+1}px`;
  }
});

function moveDodgerLeft(){
  let leftString = dodger.style.left.replace('px','');
  let leftNum = parseInt(leftString);
  dodger.style.left = `${leftNum-1}px`;
}