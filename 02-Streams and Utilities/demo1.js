const event = require('events');

const emitter = new event.EventEmitter();

emitter.on('click',(name)=>{
    console.log(`${name} clicked!`);

})


emitter.emit('click','Radoslav');