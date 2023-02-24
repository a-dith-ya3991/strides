const originalText = document.getElementById('original-text').textContent;
const editedText = document.getElementById('edited-text');
const verifyButton = document.getElementById('verify-button');
const errorMessage = document.getElementById('error-message');

// Retrieve name and mobile number from localStorage
const name = localStorage.getItem('name');
const mobileNumber = localStorage.getItem('mobileNumber');

// Update the name and mobile number on the page if they are not empty
const nameElement = document.getElementById('name');
if (name) {
  nameElement.textContent = name;
}

const mobileNumberElement = document.getElementById('mobileNumber');
if (mobileNumber) {
  mobileNumberElement.textContent = mobileNumber;
}
var startTime = Date.now();

verifyButton.addEventListener('click', () => {
  // Remove any extra words from the edited text
  
  const editedTextWords = editedText.value.trim().split(/\s+/);
  const originalTextWords = originalText.trim().split(/\s+/);
  const filteredEditedTextWords = editedTextWords.filter(word => originalTextWords.includes(word));
  const filteredEditedText = filteredEditedTextWords.join(' ');
  var timeConsumed=0;
  setInterval(function() {
    var timeConsumed = Math.floor((Date.now() - startTime) / 1000);
    localStorage.setItem('page1Time', timeConsumed);
  }, 1000);

  // Compare the edited text with the original text
  if (filteredEditedText === originalText) {
    // Redirect to the third page
    window.location.href = 'page3.html';
  } else {
    // Show error message
    errorMessage.style.display = 'block';
  }
});
