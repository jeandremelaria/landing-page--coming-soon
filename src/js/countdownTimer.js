/* Countdown Timer */

// Set the date we're counting down to
var countDowndate = new Date("Sep 5, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function(){

  // Get todays date and time
  var currentDateAndTime = new Date().getTime();

  // Find the distance between now and the countdown date
  var distanceDateAndTime = countDowndate - currentDateAndTime;

  // Time calculations for days, hours, minutes and seconds
  var days, hours, minutes, seconds;
  days = Math.floor(distanceDateAndTime / (1000 * 60 * 60 * 24));
  hours = Math.floor(distanceDateAndTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  minutes = Math.floor((distanceDateAndTime% (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distanceDateAndTime % (1000 * 60 )) / 1000);

  // Display the results in the elements
  document.getElementById("countdownTimerDaysValue").innerHTML = days;
  document.getElementById("countdownTimerHoursValue").innerHTML = hours;
  document.getElementById("countdownTimerMinutesValue").innerHTML = minutes;
  document.getElementById("countdownTimerSecondsValue").innerHTML = seconds;

  //  If the countdown is finished, write some text
  if (distanceDateAndTime < 0) {
    clearInterval(x);
    document.getElementById("").innerHTML = "Expired";
  }
}, 1000);
