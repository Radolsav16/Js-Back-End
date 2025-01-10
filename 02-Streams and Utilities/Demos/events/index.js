import events from 'events';


const eventEmiiter = new events.EventEmitter();

eventEmiiter.on('write',(firstName,lastName) => {
    console.log(`Your name is ${firstName} ${lastName}`)
})

eventEmiiter.emit('write','Radoslav','Todorov')

eventEmiiter.on('click',()=> {
    console.log('Click!')
})

eventEmiiter.emit('click');