let num = 1;
const interval = setInterval(()=>{
    console.log(num++);
}, 1000);     //1000ms = 1s 마다 정의한 콜백함수가 실행됨.

setTimeout(() => {
    console.log('Timeout!');
    clearInterval(interval);
}, 6000);    //6s 후 timeout되고 함수 종료.

//node콘솔창에서 실행을 멈추고 싶다면 ctrl+c 누른다.