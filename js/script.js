// coding implementation
// end coding imp// coding implementation
// end coding implementation
function validateForm() {
    // Get the form data
    let email = document.getElementById('email').value;
    let com = document.getElementById('com').value;
    let rate = document.getElementById('rate').value;
  
    // Validate the email address
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    // Validate the comment
    if (com === '') {
      alert('Please enter a comment.');
      return false;
    }
  
    // Validate the rating
    if (isNaN(rate) || rate < 0 || rate > 5) {
      alert('Please enter a rating between 0 and 5.');
      return false;
    }
  
    // If the validation is successful, return true
    return true;
  }
  
  // Add a listener to the form's submit event
  document.getElementById('submit').addEventListener('click', function() {
    // Validate the form
    if (!validateForm()) {
      // Prevent the form from submitting
      event.preventDefault();
    }
  });lementation
