// Define a callback function for countdown
function countdown(num, callback) {
    if (num > 0) {
      setTimeout(function() {
        document.getElementById('countdown').textContent = num;
        countdown(num - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  // Callback function to display "Independence Day"
  function displayIndependenceDay() {
    setTimeout(function() {
      document.getElementById('countdown').textContent = "Independence Day";
    }, 1000);
  }
  
  // Start the countdown
  countdown(10, displayIndependenceDay);
  