process.stdout.write('\x07');
// console.log("alarm numbers", alarmNumbers)
const timer = function() {
  const alarmNumbers = process.argv.slice(2)
  .filter(number => !isNaN(number))
  .filter(number => number > 0)
  .sort();

  console.log(alarmNumbers);
  alarmNumbers.forEach((second) => {
    console.log(`This will make a beep at ${second} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`I'm beeping at ${second} seconds`);
    }, second * 1000)
  })

}

timer();

