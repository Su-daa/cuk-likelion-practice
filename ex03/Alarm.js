let interval;

function checkTime() {
  console.log("checkTime()");
  const date = new Date();
  const localTime = date.toString().slice(16, 21);
  let setTime = document.getElementById("alarm-time").value;
  let result = localTime === setTime;
  if (result) {
    alert("Alarm");
    clearInterval(interval);
  }
  return;
}

function setAlarm() {
  console.log("setAlarm()");
  interval = setInterval(checkTime, 1000);
}
