const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Please turn off the motor!');

  setTimeout(() => {
    console.log("Please turn off the motor , It's a gentle reminder !")
  },3000);
});

console.log("The Script is Running ")
//myEmitter.emit('Waterfull');
console.log("The Script is still Running ")

myEmitter.emit('Waterfull');
