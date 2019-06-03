<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/index.css">
  <title>Digital Clock</title>
</head>

<body>

<div class="wrapper">


    <!-- Headers -->

    <div class="header-1">Digital Clock</div>
    <div class="header-2"></div>
    <div id="clock-box" class="clock-box"></div>


    <!-- Configuration area -->

    <div class="configuration-title">Alarm</div>

    <div class="configuration-area">

        <form onsubmit = "return validation();">                                <!-- Checks validation -->

        <!-- Conf-area-1 -->

        <div class="conf-area-1">

          <!-- Form to submit alarm time -->

              <div class="conf-area-1a">
                <div class="hours">
                   <input
                       class="userInputHours"
                       id="userInputHours"
                       type="text"
                       placeholder="Hours"
                   >
                </div>
              </div>

              <div class="conf-area-1b">
                <div class="minutes">
                  <input
                      id="userInputMinutes"
                      type="text"
                      placeholder="Minutes"
                  >
                </div>
              </div>

              <div class="conf-area-1c">
                   <input
                       id="userInputSeconds"
                       type="text"
                       placeholder="Seconds"
                   >
                  <br /><br />
              </div>
          </div>
          <input id="submit" type="submit" value="Set Alarm">
        </form>


    <!-- Conf-area-2 -->

    <div class="conf-area-2">

      <div class="conf-area-2a"></div>

      <div class="conf-area-2b">
        <div id="info-box-title" class="info-box-title"></div>
        <div id="info-box-text" class="info-box-text"></div>
      </div>

      <div class="conf-area-2c"></div></div>


    <!-- Conf-area-3 -->

    <div class="conf-area-3">
        <div class="conf-area-3a">
          <input
              id="submit-2"
              type="submit"
              value="Shutoff"
              onclick="turnOffAlarm()"
          >
        </div>

        <div class="conf-area-3b">
          <input disabled id="submit-3" type="submit" value="Snooze">
        </div>

        <div class="conf-area-3c">
          <input disabled id="submit-4" type="submit" value="Ring tone">
        </div>
    </div>

    </div>

</div> <!-- Closure wrapper -->



<!-- Javascript -->

<script src="js/index.js"></script>

</body>
</html>
