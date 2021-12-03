var event = require('event');

var eventEmitter = new events.EventEmitter();

eventEmitter.on(evenementDramatique, function() {console.log("DRAME!!!!!")})

console.log("j'écoute l'évènement ...");

setTimeout(function() { eventEmitter.emit('evenementDramatique')})