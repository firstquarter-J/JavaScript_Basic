// 1. Use strict
// JavaScript is very flexible
// flexible === dangerous
// added in ECNAScript 5
// use this for Valina Javascript.
'use strict'; // 상식적인 코딩 가능하게 해 준다

// 2. Varialbe, rw(read/write) // 변경될 수 있는 값
// let (added in ES6) // mutable data type

let globalName = 'global name'; // 블럭 밖에서 사용한 변수는 자유롭게 사용 가능, 앱이 끝날 때 까지 메모리에 할당되기 때문에 최소한으로 사용!

{ // 블록 설정시 블록 안의 내용들은 블록 내에서만 사용 가능
let name = 'Hyun'; // 앱 실행 시 메모리 할당, 유한한 공간
console.log(name); // Hyun
name = 'Hello';
console.log(name); // Hello
}
console.log(name); // 출력없음
console.log(globalName); // global name

// var (don't ever use this!) // 선언하기 전에도 값을 할당 할 수 있는 괴상한 녀석
console.log(age); // undefined // 에러 대신 변수가 정의되어있으나 값이 없다고 함
age = 4;
console.log(age); // 4
var age;
// var hoisting 어디에서 선언했던 항상 제일 위로 선언을 '끌어 올려 준다' = hoisting
// var has no block scope // 블럭조차 무시하고 뒤죽박죽이 될 수 있다

// 3. Constant, r(read only) // 메모리에 선언 된 후 변경 불가 ( 읽기만 가능! ) // immutable data type
// Immutable data types : primitive types, frozen objects (i.e object.freeze())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons? 왜 항상 불변의 데이터 타입을 써야 하는가?
// - security // 해커가 지 맘대로 변경할 수 없게!
// - thread safety // 다중 스레드가 변수에 동시접근시 위험할 수 있다. 값이 변경되지 않도록 변수를 선언하면 안심
// - reduce human mistakes // 인간은 어리석고 같은 실수를 반복하지...
const daysInWeek = 7; // 일주일은 7일이니 변경될 수 없는 const 로 변수 선언!
const maxNumber = 5; // 반드시 5라는 값을 가져야 하는 조건일때 역시 변경될 수 없는 const 로 변수 선언!

// 4. Varialbe types
// primitive, single item (더이상 쪼개기지 않는 최소단위) : Number, string, boolean, null, undefined, symbol
// object : 위 싱글 아이템들을 묶어서(박스화) 관리
// function : first-class function? 함수도 다른 데이터 타입처럼 변수할당 가능, 함수 파라미터 인자 전달 가능, 리턴 타입으로도 리턴 가능

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`); // value : 17, type : number // 값에 상관없이
console.log(`value : ${size}, type : ${typeof size}`); // value : 17.1, type : number // 변수 type은 number!

// number - special numeric values : infinity, -infinity, NaN ( not a number )
const infinity = 1 / 0; 
const negativeInfinity = -1 / 0; 
const nAn = 'not a number' / 2; 
console.log(infinity); // infinity // 무한대로 수렴
console.log(negativeInfinity); // -infinity
console.log(nAn); // NaN // 문자를 숫자로 나눴으니 숫자가 아니라고 말해주네!
// 항상 연산 전에 그 값이 연산 가능한 값인지 생각 한 후 코딩!

// number : over(-2**53) ~ (2*53) // number 에 들어갈 수 있는 수의 크기
const bigInt = 12345678901234567890123456788901234567890n; // 최근에 추가된 더 큰 숫자 타입 // 숫자 끝에 n을 붙여줌
console.log(`value : ${bigInt}, type : ${typeof bigInt}`); // value : 12345678901234567890123456788901234567890, type : bigint
// 현재는 크롬, 파이어폭스에서만 지원

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`); // value : hello brendan, type : string 
const helloHyun = `hi ${brendan}!`; //template literals (string) // `` 사이에 ${} 로 변수 출력!
console.log(`value: ${helloHyun}, type : ${typeof helloHyun}`); // value: hi brendan!, type : string

// boolean
// flase : 0, null, undefined, NaN, '' // NaN? not a number
// true : 1 or any other value
const canRead = true;
const test = 3 < 1;
console.log(`value : ${canRead}, type : ${typeof canRead}`); // value : true, type : boolean
console.log(`value : ${test}, type : ${typeof test}`); // value : false, type : boolean

// null // 명확하게 아무 값도 없다고 지정!
let noting = null; 
// console.log(`value : ${nothing}, type : ${typeof nothing}`); // type : object

// undefined // 선언은 되었지만 아무 값도 없을때, 또는 없다고 지정!
let x;
console.log(`value : ${x}, type : ${typeof x}`); // value : undefined, type : undefined

// symbol, create unique identifiers for objects 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false // 심볼은 동일한 값이어도 다른 식별자로 인식되기에 고유한 식별자 만들때 사용!
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true : 값이 같을 때 동일한 심볼로 만들고 싶다면 .for 사용하면 true
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`); //value : id, type : symbol 
// .description 으로 스트링변환하여 사용해야 출력가능!
// mpa이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시다발적 실행 코드에서 우선순위 주고 싶을때 고유한 식별자 지정

// object, real-life object, data structure
const Hyun = { name : 'Hyun', age : 34 }; // 물건, 물체를 대표할 수 있는 박스형태인 object
Hyun.age = 26;
// const로 선언한 Hyun은 변경할 수 없지만 내부의 값들은 자유롭게 읽고, 쓰고, 변경 가능!

// 5. Dynamic typing : dynamically typed language
// 자바스크립트는 변수를 선언할 때 어떤 타입인지 선언하지 않고도 실행될 때 할당된 값에 따라서 타입변경
let text = 'hello';

console.log(text.charAt(0)); // h // 중간에 다른 개발자가 문자열이니 배열의 첫번째 값을 출력해버렸다면? ->114줄로

console.log(`value : ${text}, type : ${typeof text}`); // value : hello, type : string // 알아서 string 타입으로 인식
text = 1;
console.log(`value : ${text}, type : ${typeof text}`); // value : 1, type : number // 알아서 number 타입으로 인식
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`); // value 75, type : string // 문자와 숫자를 더했더니 숫자를 문자로 변환하여 출력
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`); // value 4, type : number 
                                                    // 문자로 선언한 값이 숫자이고 나누기 연산자를 사용했더니 알아서 숫자로 변환하여 계산 후 출력!

console.log(text.charAt(0)); // 중간에 누군가가 타입변경 시 에러발생!
// 자바스크립트는 런타임에서 타입이 정해지기 때문에 에러가 런타임으로 발생하여 뒤통수 빈번!
// 해결책으로 TS 출시