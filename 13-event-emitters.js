const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log('called');  
})

customEmitter.on('failed', (...data) => {
  console.log('called failed', data);  
})

customEmitter.on('failed', () => {
  console.log('here also');  
})

customEmitter.emit('failed','chirag', 30);