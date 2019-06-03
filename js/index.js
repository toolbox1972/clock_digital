console.log("test12");

/**
 * Known errors:
 #1 - After pressing button "shutting off", you cannot get set the alarm again and get the sound working.
 #2 - Putting the alarm to a "past time" will trigger it to start beep.
 */

 /**
  * Clarifications:
  * The [alarmTimeSetInFrontend] is used for user to set the alarm in the app.
  * The [alarmTimeSetInBackend] is for troubleshooting and for admin to inject the alarm directly in the code.
  */


/**
 * Global variables
 */

var fetchedOriginalDate;                                                        // Used to get local date/time. Store into a variable.
var timeAsString;                                                               // Move date/time into a string format.
var currentTime;                                                                // Add variable name currentTime.
var alarmTimeSetInBackend;                                                      // Store alarm setting - backend.
var alarmTimeSetInFrontend;                                                     // Store alarm setting - frontend.
var userInputHours;                                                             // Stores hours, from user input.
var userInputMinutes;                                                           // Stores minutes, from user input.
var userInputSeconds;                                                           // Stores meconds, from user input.

/**
 * Clock mechanism
 */

function updateClock() {

  fetchedOriginalDate = new Date();                                             // Extract date.

  timeAsString = fetchedOriginalDate.toLocaleTimeString(                        // Set time to 24h.
      'it-IT', {hour12: false});

  currentTime = timeAsString;                                                   // Move in time into variable currentTime.
  setTimeout (updateClock, 1000);


/**
 * Verify time printout to console.
 * console.clear();
 * console.log(currentTime);
 */


  var x = document.getElementById("clock-box");                                 // Sends current time to HTML page.
  x.innerHTML = currentTime;

  checkIfStartAlarm();                                                          // Starts alarm if alarm time has passed currentTime.
}

updateClock();                                                                  // Initial call.

function checkIfStartAlarm() {
  // Front-end alarm.
  if (alarmTimeSetInFrontend < currentTime) {
  playSound_alarmBeep();
  }
// Back-end alarm.
  // if (alarmTimeSetInBackend < currentTime) {                                 // Currently not activated.
  //   playSound_alarmBeep();
  // }

}

/**
 * Back-end alarm settings
 */

function setBackendAlarm() {
  var setAlarmTo = new Date();                                                  // Assign date format to object.
  setAlarmTo.setHours(18,00,00);                                                // Set time to date object. Set alarm time.
  alarmTimeSetInBackend = setAlarmTo.toLocaleTimeString(                        // Change to string.
      'it-IT', {hour12: false});
  console.log("Alarm set in backend to: " + alarmTimeSetInBackend);
}

setBackendAlarm();

/**
 * Audio
 * Ref: https://freesound.org/people/kwahmah_02/sounds/250629/
 */

var audio = new Audio("audio/alarm-beep.mp3");
var muted = 0;

function playSound_alarmBeep() {
  audio.play();
  audio.muted = false;
  audio.volume = 1;                                                             // Set volume
  if (muted == 1 ){
    audio.muted = true;
  }
}

/**
 * Turn off alarm
 */

function turnOffAlarm() {
muted = 1;
}

/**
 * Validation - alarm text input
 */

function validation() {
  userInputHours =   document.getElementById("userInputHours").value;
  userInputMinutes = document.getElementById("userInputMinutes").value;
  userInputSeconds = document.getElementById("userInputSeconds").value;

  // Validates blank fields
  if (userInputHours == "" || userInputMinutes == "" || userInputSeconds == "") {
      console.log("A field is left blank");
      alert("Please fill in all fields!")
      return false;
}

  // Validates non-digit characters
  if (
    (isNaN(userInputHours)) ||
    (isNaN(userInputMinutes)) ||
    (isNaN(userInputSeconds)) ) {
      console.log("One of the fields contains a non-number character");
      return false;
    }

  // Validates hours digits (max 23).
  if (userInputHours > 23) {
    console.log("Max hours is 23!");
    x = document.getElementById("userInputHours").style;
    x.color = ("red");
    return false;
  }

  // Validates minutes digits (max 59).
  if (userInputMinutes > 59) {
    console.log("Max minutes is 59!");
    x = document.getElementById("userInputMinutes").style;
    x.color = ("red");
    return false;
  }

  // Validates seconds digits (max 59).
  if (userInputSeconds > 59) {
    console.log("Max seconds is 59!");
    x = document.getElementById("userInputSeconds").style;
    x.color = ("red");
    return false;
  }

  else {
  alarmTimeSetInFrontend = (userInputHours + ":" + userInputMinutes + ":" + userInputSeconds);
  console.log("Alarm set in front-end to: " + alarmTimeSetInFrontend);
  //console.log("Alarm set in front-end: " + userInputHours + ":" + userInputMinutes + ":" + userInputSeconds);
  document.getElementById("info-box-text").innerHTML = alarmTimeSetInFrontend;
  return false;
  }
}
