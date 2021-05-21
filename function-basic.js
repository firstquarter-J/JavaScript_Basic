// 함수 선언
function doSomething(add) {
    console.log(add);
    const result = add(1, 2);
    console.log(result);
}
function add(a, b) {
    const sum = a + b;
    return sum;
}
// 함수 호출
doSomething(add);

const addFun = add;
console.log(add);
const result2 = addFun(1, 2);
console.log(result2);

console.log('------')

const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

function add (a, b) {
    return a + b;
}

const sum = add(4,5);
console.log(sum); // 9

const doSomething2 = add;
// 오브젝트처럼 같은 레퍼런스를 가르키고 있다!
const ds = doSomething2(4, 5);
console.log(ds); // 9

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(4, 5);
    console.log(result);
}

surprise(add); // 9
surprise(divide); // 0.8