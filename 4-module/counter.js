let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}


//getCount와 increase 함수만을 외부에 노출. count변수는 노출하지 않음.
module.exports.getCount = getCount;
module.exports.increase = increase;