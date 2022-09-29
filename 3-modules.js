// CommonJS - every file in node is module 
// Modules - Encapsulated code
const {chirag, john} = require('./4-names') 
const mainController = require('./5-utils')
const data = require('./6-alternative-flavor');
// NOTE: whenever you import module, you actually invoke it
// require('./7-mind-granade')


// mainController.sayHi(data.items.join(' & '));
mainController.sayHi('peter');
mainController.sayHi(chirag);
mainController.sayHi(john);