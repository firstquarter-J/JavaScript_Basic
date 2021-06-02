'ues strict';
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function decalraon
// function name(parameter1, parameter2) { body... return; }
// one function === one thing
// naming : doSomething, command, verb // 동사형으로 이름 지정!
// e.g. createCardAndPoint -> createCard, createPoint
// e.g. ? example given
// function is object in JS // JS에서 함수는 오브젝트다!

function printHello() {
    console.log('Hello');
}
printHello(); // Hello

function log(message) {
    console.log(message);
}

log('Hello!'); // Hello!
log(1234); // 1234 // 자바스크립트는 입력값의 타입을 명시할 수 없어 난해한 경우 발생 // TS에서 개선!

// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference

function changeName(obj) { // 전달된 obj에 name을 무조건 coder 로 저장!
    obj.name = 'coder';    // object는 레퍼런스로 전달되기 때문에 함수 안에서 object값을 변경하면 그대로 메모리에 저장, 추후 확인 가능
}
const Hyun = { name : 'Hyun'};
changeName(Hyun);
console.log(Hyun); // { name : "coder" }

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    // if ( from === undefined ) { 
    //     from = 'unknown'; // 과거엔 설정 해 줘야 했으나 이제 안 그래도 됨!
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // Hi! by undefined // from = 'unknown' 설정 시 // Hi! by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) { // ... 은? args를 배열 형태로 전달 받겠다!
    for ( let i = 0; i < args.length; i++ ) {
        console.log(args[i]); // I Can // Do This // All Day
    }
    for ( const arg of args ) {
        console.log(arg); // I Can // Do This // All Day // for ( const a of b ) = b의 값이 a로 하나씩 지정되어 출력!
    }
    args.forEach((arg) => console.log(arg)); // forEach함수형 언어 이용한 더 간단한 방법! // 추후 배열에서 공부
}
printAll('I Can', 'Do This', 'All Day'); 

// 5. Local scope // 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다!
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello~!';
    }
    // console.log(childMessage); // 에러 발생! 자식 함수 안에 있는 변수는 볼 수 없어!
    // retunr undefined; // 기본적으로 들어가 있으나 생략 가능
}
printMessage(); // hello // global

// 6. return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum : ${sum(1,2)}`); // sum : 3

// 7. Early return, early exit 
// bad!
function upgradeUser(user) {
    if ( user.point > 10 ) { 
        // long upgrade logic... // 블럭 안에서 로직 작성 많이하면 가독성 떨어지니
    }
}

// good!
function upgradeUser(user) {
    if ( user.point <= 10 ) {  // 조건이 맞을 때만 실행되도록 설정!
        return; // if else 많이 사용하는 것 보다 조건이 맞지 않을 때 빨리 리턴해서 함수 종료. 
    }
    // lon upgrade lojic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returend by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function() { // anonymous function
    console.log('print');
};
print(); // print
const printAgain = print;
printAgain(); // print
const sumAgain = sum; // 위에서 선언한 sum 함수!
console.log(sumAgain(1, 3)); // 4

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) { // 함수를 전달하여 조건이 맞으면 전달된 함수를 불러! Callback
    if ( answer === 'love you' ) {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() { // anonymous function
    console.log('yes!');
}

// named function
// better debugging in degugger's stack traces
// recursions
const printNo = function print() { // 디버깅 할때 함수 이름 표현하기 위해 네이밍 함수 사용~?
    console.log('no!');
    // print(); // recursions 선언된 함수 내에서 그 함수를 또 호출하는 것. ex 피보나치 수열 계산때 사용?
}
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// Arrow function
// always anonymous

// const simplePrint = function() {
//     console.log('simplePrint!')
// };
const simplePrint = () => console.log('simpelPrint!'); // 변신!

const simpleMultiply = (a, b) => { // 블럭이 필요한 경우!
    // do something more
    return a * b;
};

// const add = function (a, b) {
//     return a + b;
// };
const add = (a, b) => a + b; // 변신!

// IIFE : Immediately Invoked Function Expression // 선언함과 동시에 호출!
(function hello() {
    console.log('IIFE');
})(); // 이런 방법도 있다

// Fun quiz time~~!
// function calculate(command, a, b)
// command : add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));