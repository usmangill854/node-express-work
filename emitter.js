const eventEmitter = require('events')
const customEmitter = new eventEmitter

customEmitter.on('call',(name,id) => {
    console.log( `called ${name} ${id}` )
})

customEmitter.on('call',() => {
  console.log('somethinf')
})

customEmitter.emit('call','gill',45)