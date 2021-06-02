// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all object in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const Hyun = {name : 'Hyun', age : 34}; // JS에선 클래스 없이도 괄호를 이용해 오브젝트 생성 가능!
print(Hyun); // Hyun // 34

// with JavaScript magic ( dynamically typed language )
// can add properties later
Hyun.hasJob = true; // 나중에 추가 가능하지만... 하지마!
console.log(Hyun.hasJob); // true

// can delete properties later
delete Hyun.hasJob; // 삭제하면?
console.log(Hyun.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(Hyun.name); // Hyun
console.log(Hyun['name']); // Hyun // 만약 [name] // undefined // key 는 string으로 받아와야 함!

Hyun['hasJob'] = true; // 위에서 삭제한 hasJob을 재 생성! // 추가하는 두가지 방법
console.log(Hyun.hasJob); // true 

// .name ? 코딩하는 순간 그 키 값을 받아오고 싶을 때 사용
// ['name'] ? Computed properties : 정확하게 어떤 키가 필요할 지 모를 때(런타임에서 결정될 때) 이 방식을 사용 // 실시간!

function printValue(obj, key) { 
    // console.log(obj.key); // undefined
    console.log(obj[key]); // e.g. 사용자에게 실시간으로 정보를 입력받아 사용할 때 이런 식으로!
}
printValue(Hyun, 'name'); // Hyun
printValue(Hyun, 'age') // 34

// 3. Property value shorthand
const person1 = { name : 'jang', age : 26 };
const person2 = { name : 'Hyun', age : 34 };
const person3 = { name : 'sun', age : 20 };
const person4 = makePerson('joo', 40);

console.log(person4); // {name: "joo", age: 40}

function makePerson(name, age) { // 다른 계산 없이 순수하게 오브젝트를 생성하는 함수 생성, 사용법!
    return {
        name, // name : name, // 생략해서 간소화 가능!
        age, // age : age, // 좋은데!? 그러나... -> 4.
    };
}

// 4. Constructor Function
const person5 = new Person('Hee', 5);
console.log(person5); // Person {name: "Hee", age: 5}
                            // 다른 계산 없이 순수하게 오브젝트 생성하는 함수들은
function Person(name, age) { // 대문자로 시작하도록 함수 생성! JS가 알아서 오브젝트 생성
    // this = {}; // 생략 가능!
    this.name = name;
    this.age = age;
    // return this; // 생략 가능!
}

// 5. in operator : property existence check (key in obj)
console.log('name' in Hyun); // true
console.log('age' in Hyun); // true
console.log('random' in Hyun); // false
console.log(Hyun.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
// console.clear(); // 콘솔창 클리어!
for (key in Hyun) {
    console.log(key); // name // age // hasJob
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value); // 1, 2, 4, 5 //  너무 좋은데!!!?
}

// 7. Fun clonig
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name : 'Hyun', age : '34 '}
const user2 = user;
user2.name = 'coder';
console.log(user); // {name: "coder", age: "34 "}

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3); // {name: "coder", age: "34 "}

const user4 = {};
Object.assign(user4, user);
console.log(user4); // {name: "coder", age: "34 "}

const user5 = Object.assign({}, user);
console.log(user5); // {name: "coder", age: "34 "}

// anoter example
const fruit1 = { color : 'red '};
const fruit2 = { color : 'blue', size : 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 동일한 속성값은 뒤에 있는 값으로 덮어 씌운다!
console.log(mixed.color); // blue
console.log(mixed.size); // big