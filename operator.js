// 1. String concatenation
console.log('my' + 'cat'); // mycat
console.log('1' + 2); // 12
console.log(`string literals : 1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 2. Numeric operators
console.log(1 + 1); // add  // 2
console.log(1 - 1); // substract // 0
console.log(1 / 1); // divide // 1
console.log(1 * 1); // multiply // 1
console.log(5 % 2); // remainder // 1
console.log(2 ** 3); // exponentiation // 8

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // ++ 앞에 있으면 먼저 더하고 대입
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`); // 3, 3

const postIncrement = counter++; // ++ 뒤에 있으면 대입 후에 더하기
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`); // 3, 4

// -- 연산도 동일!
const preDecrement = --counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`); // 3, 3
const postDecrement = counter--;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`); // 3, 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than // false
console.log(10 <= 6); // less than or equal // false
console.log(10 > 6); // greater than // true
console.log(10 >= 6); // greater than or equal // true

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) -> finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`); // or : true // 연산이 많은 함수를 첫번째에 호출하면? 털리고 집에가서 울겠지.
                    //false    false     true
function check() {
    for ( let i = 0; i < 10; i++ ) {
        //wasting time
        console.log('!?'); // check() 함수가 true 라 !? 10회 반복출력 후 true 리턴받아 or : true 출력!
    }
    return true;
} 

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`); // and : false

function check() {
    for ( let i = 0; i < 10; i++ ) {
        //wasting time
        console.log('!?'); // value1 부터 false라 check 함수 실행하지 않고 and : false 만 출력!
    }
    return true;
} 

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if ( nullableObject != null ) { 
//     nullableObject.something; // 간편한 null 체크 예
// }

// ! (not)
console.log(!value1); // true // value1 값이 false기 때문에 true로 변경하여 출력

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversin // 자바스크립트가 자비롭게 타입 변경하여 검사!
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false 

// === strict eqaulity, no type conversion // 자바스크립트가 자비없이 타입 신경써서 검사! // 즉, 이걸 쓰시오!
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const Hyun1 = { name : 'Hyun' };
const Hyun2 = { name : 'Hyun' };
const Hyun3 = Hyun1;
console.log(Hyun1 == Hyun2); // false // 서로 다른 곳에 저장되고, 역시 다른 곳을 지정하고 있으므로 false
console.log(Hyun1 === Hyun2); // false // 이하동문
console.log(Hyun1 === Hyun3); // true // Hyun3이 Hyun1 을 지정하고 있으므로 true

// equality - puzzler
console.log(0 == false); // true // 0, null 은 false 로 간주될 수 있으니 자비롭게 true
console.log(0 === false); // false // 0 은 boolean 타입이 아니니 자비없게 false
console.log('' == false); // true // 비었으니 자비롭게 true
console.log('' === false); // false // ''는 boolean 아니니 자비없게 false
console.log(null == undefined); // true // null이 undefined 이기 때문에 자비롭게 true
console.log(null === undefined); // false // undefined은 boolean 아니니 자비없게 false

// 8. Conditional operators : if
// if, else if, else
const name = 'Hyun';
if ( name === 'Hyun' ) {
    console.log('Welcome, hyun!');
} else if ( name === 'coder') {
    console.log('You are amazing coder!');
} else {
    console.log('unknown')
}

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log( name === 'Hyun' ? 'yes' : 'no'); // yes

// 10. Switch statement
// use for multiple if checks
// use for eunm-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while ( i > 0 ) { // 조건이 false가 될때까지 반복
    console.log(`while : ${i}`); // 3, 2, 1
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do { 
    console.log(`do while : ${i}`); // do while : 0
    i--;
} while ( i > 0 ); // 블럭 먼저 실행 후 조건 판별

// for loop, for(begin; condition; step)
for ( i = 3; i > 0; i-- ) { //전역변수 사용 가능
    console.log(`for : ${i}`);
}

for ( let i = 3; i > 0; i = i - 2 ) { // 지역변수도 사용 가능
    //inline variable declaration
    console.log(`inline variable for : ${i}`);
}

// nested loops
for ( let i = 0; i < 3; i++ ) {
    for ( let j = 0; j < 3; j++ ) {
        console.log(`i : ${i}, j : ${j}`); // cpu 힘들어!
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for ( let i = 0; i < 11; i++ ) { // 내 코딩
    if ( i % 2 === 0 ) {
        console.log(i);
    } else {
        continue;
    }
}

for ( let i = 0; i < 11; i++ ) { // 엘리님 코딩
    if ( i % 2 === 0 ) {
        console.log(i);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for ( let i = 0; i < 11; i++ ) { // 내 코딩
    if ( i < 9 ) {
        console.log(i);
    } else if ( i === 8 ) {
        break;
    }
}

for ( let i = 0; i < 11; i++ ) { // 엘리님 코딩
    if ( i > 8 ) {
        break;
    }
    console.log(i);
}