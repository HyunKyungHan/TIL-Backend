//events 내의 EventEmitter 클래스 사용

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('ellie', (args) => {
    console.log('first callback - ', args);
});

emitter.emit('ellie', {message: 1});
emitter.emit('ellie', {message: 2});
emitter.removeListener('ellie', callback1);  //첫번째 함수는 callback하지 않음
emitter.emit('ellie', {message: 3});
