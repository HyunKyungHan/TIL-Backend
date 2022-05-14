// process를 사용해 현재 동작하는 node의 process에 대한 정보를 얻을 수 있다.

const process =  require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());


setTimeout(() => {
    console.log('setTimeout');
}, 0)        //함수 코드가 끝나면 0초 있다가 콜백함수를 실행하라는 명령.


//현재 실행되는 함수의 코드가 끝나면 등록한 콜백 함수를 task queue에 넣어달라는 명령.
//nextTick을 사용하면 다른 콜백함수들보다 먼저 실행됨.(가장 높은 우선순위 부여)
process.nextTick(() => {
    console.log('nextTick');
})

