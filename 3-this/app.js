//this는 문맥에 따라 가리키는 대상이 달라지므로 주의한다.


function hello() {
    console.log(this);
    console.log(this === global);    // true. 함수 안에서 this를 호출하면 global임을 알 수 있다.
}

hello(); 

class A {
    constructor(num) {
        this.num = num;
    }
memberFunction() {
    console.log('----- class -----');
    console.log(this);             // this는 class 자체를 가리키고 있다.
    console.log(this === global);  // false. class에서 this는 global이 아니다. class에서 this는 자기 자신을 가리키고 있음.
}
}

const a = new A(1);
a.memberFunction();


console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports);    // true. node에서 this는 module에 있는 exports를 가리킨다. 