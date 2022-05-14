console.log('code1');
setTimeout(() => {
    console.log('setTimeout 0');
}, 0 );

console.log('code2');
setImmediate(() => {
    console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
    console.log('process.nextTick');
});      //remind: nextTick이 task queue에서 가장 우선순위가 높음.