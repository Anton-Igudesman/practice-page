const button = document.querySelector('.click-me');
const heading = document.querySelector('.card-title');

//text change
function textChange() {
    console.log('clickey');
    heading.textContent= 'Hey look at that!!'
}

//original text
function originalText() {
    heading.textContent= 'Chris Mullin';
}

//button action function
function buttonAction() {
  button.style.color = "pink";  
}
//original button color
function originalButton() {
    button.style.color = "lightgray";
}

//setting button actions
button.addEventListener('mousedown', textChange);
button.addEventListener('mouseup', originalText);
button.addEventListener('mouseenter', buttonAction);
button.addEventListener('mouseleave', originalButton);

