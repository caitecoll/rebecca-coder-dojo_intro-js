// client-side js
// run by the browser each time your view template is loaded

function toggleAnswer(buttonId, answerId) {
  var buttonClicked = document.getElementById(buttonId);
  var answerToToggle = document.getElementById(answerId);
  
  if (buttonClicked.innerHTML == 'Show Answer') {
    
    buttonClicked.innerHTML = 'Hide Answer';
    answerToToggle.classList.add('answerVisible');
    
  } else {
    
    buttonClicked.innerHTML = 'Show Answer';
    answerToToggle.classList.remove('answerVisible');
    
  }
  
}
