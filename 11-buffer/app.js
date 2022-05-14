//buffer = fixed-size chunk of memory
//array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf);    //unicode 형태로 출력
console.log(buf.length);
console.log(buf[0]);     //buffer에 array형태로 저장됨. ASCII코드 출력
console.log(buf[1]);     //ASCII코드 출력

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); //fast
buf2[0] = 72;
buf2[1] = 105;
console.log(buf2.toString());   //string형태로 출력
console.log(buf3);
buf2.copy(buf3);    //buf2의 내용을 buf3으로 가져옴
console.log(buf2.toString());    //Hi
console.log(buf3.toString());    //Hi

//concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());