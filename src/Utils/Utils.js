const prettyPrintTime = timeInMs => {
  let centiseconds = ("00" + (Math.floor(timeInMs) % 1000)).slice(-3);
  let seconds = ("0" + (Math.floor(timeInMs / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timeInMs / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timeInMs / 3600000)).slice(-2);
  return ` ${hours} : ${minutes} : ${seconds} : ${centiseconds}`;
};

export default prettyPrintTime;
