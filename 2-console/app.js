console.log('logging...');
console.clear();       //이전의 로그들을 모두 지우고 싶을 때

// log level
// 개발할 때는 로그를 이용하지만 배포할 때는 로그를 출력하지 않도록 함.
// level별로 정말 출력할 것인지 관리하기 위해 레벨별로 console log를 다르게 사용하는 게 좋다.
console.log('log');  //개발
console.log('info');  //정보를 남기고 싶을 때
console.log('warn');  //경보 단계
console.error('error');  //심각한 에러(사용자 에러, 시스템 에러)

// assert
console.assert(2 == 3, 'not same!');  // comma앞의 내용이 참이 아닌 경우 출력
console.assert( 2 == 2, 'same!');  //내용이 참인 경우 출력하지 않음

//print object
const student = { name: 'ellie', age: 20, company: {name: 'AC'} };
console.log(student);     //object의 정보들을 있는 그대로 출력
console.table(student);   //object의 정보들을 table형태로 출력
console.dir(student);     //log와 동일한 출력결과. 하지만 새로운 option을 추가할 수 있다.
console.dir(student, {showHidden: true, colors: false, depth: 0 });
console.dir(student, {showHidden: true, colors: false, depth: 2 });    //depth에 따라 출력결과가 다르다.


//measuring time
console.time('for loop');
for(let i=0; i <10; i++) {
    i++;
}
console.timeEnd('for loop');     //for loop를 도는 데 시간이 얼마나 걸리는 지 확인할 수 있음

//counting
function a() {
    console.count('a function');    //count 내의 레이블('a function')이 몇번 호출되었는지 확인할 수 있음 
}
a();
a();
console.countReset('a function');    //이제까지 count한 호출 횟수를 초기화할 수 있음


//trace
function f1() {
    f2();              //함수 f1에서 함수 f2 호출
}
function f2() {
    f3();               //함수 f2에서 함수 f3 호출
}
function f () {
    console.log('f3');
    console.trace();     // debugging 시 어디서 함수를 호출했는지 알고 싶을 때 trace사용
}
f1();