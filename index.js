const app = "I don't do much."

let dodger = document.querySelector('#dodger');

document.addEventListener('keydown', function(event){
  if(event.which === 37){
    let leftString = dodger.style.left.replace('px','');
    let leftNum = parseInt(leftString);
    dodger.style.left = `${leftNum-1}px`;
  } else if (event.which === )
});