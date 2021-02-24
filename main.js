
var boxList          = document.querySelector('.box');
var messageContainer = document.querySelector('#message-container');
var startOverButton  = document.querySelector('#start-over-button');

//highlight all the boxes
function toggleBoxesBackgroundColor() {
    for ( i = 0; i < boxList.length; i++ ){
        boxList[i].classList.toggle('new-color');
    }
}

//replace text in message container and show start over button
function addMessage1() {
    messageContainer.innerHTML = 'oh - so close, but no cigar';
    startOverButton.classList.remove('hide');
}
function addMessage2() {
    messageContainer.innerHTML = 'DING DING DING - we have a winner';
    startOverButton.classList.remove('hide');
}
function addMessage3() {
    messageContainer.innerHTML = 'oops - better luck next time';
    startOverButton.classList.remove('hide');
}

//add event listener to toggle color on hover
for ( i = 0; i < boxList.length; i++ ){
    boxList[i].addEventListener('mouseenter', toggleBoxesBackgroundColor);
    boxList[i].addEventListener('mouseleave', toggleBoxesBackgroundColor);
}

//add event listners for each box on click with specific messages
boxList[0].addEventListener('click', addMessage1);
boxList[1].addEventListener('click', addMessage2);
boxList[2].addEventListener('click', addMessage3);