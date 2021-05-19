'use struct';

// Array

// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position

const fruits = ['사과', '바나나'];
console.log(fruits) // (2) ["사과", "바나나"]
console.log(fruits.length); // 2
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 바나나 // 배열 마지막 값 출력법!

// 3. Looping over an array
// print all fruits

// a. for
for ( let i = 0; i < fruits.length; i++ ) {
    console.log(fruits[i]); // 사과 // 바나나
}
// b. for of
for ( let fruit of fruits) {
    console.log(fruit); // 사과 // 바나나
}
// c. forEach // callback!
fruits.forEach(function(fruit, index) { // value, index, array 세가지 값 출력 가능!
    console.log(fruit, index); // 사과 0 // 바나나 1
})

fruits.forEach((fruit) => console.log(fruit)); // 이름없는 함수는 애로우 함수로 변경 가능!
// 배열 안에 들어있는 값 마다 내가 전달한 함수를 출력한다!

// 4. Addtion, deletion, copy
// push : add an item to the end

fruits.push('딸기', '복숭아');
console.log(fruits); // (4) ["사과", "바나나", "딸기", "복숭아"]

// pop : remove an item from the end
fruits.pop();
console.log(fruits); // (3) ["사과", "바나나", "딸기"]

// unshift : add an item to the benigging
fruits.unshift('레몬', '포도');
console.log(fruits); // (5) ["레몬", "포도", "사과", "바나나", "딸기"]

// shift : remove an item from the benigging
fruits.shift();
console.log(fruits); // (4) ["포도", "사과", "바나나", "딸기"]
// note !! shift, unshift are slower than pop, push // 배열 인덱스 값을 재 지정하느라 아주 느려! // pop, push 를 사용권장!

// splice : remove an item by index position
fruits.splice(1); // 몇번째까지 지울지 지정하지 않고 시작값만 넣으면? 그 값부터 전부 삭제!
console.log(fruits); // ["포도"]

fruits.push('사과', '바나나', '레몬', '복숭아');
console.log(fruits); // (5) ["포도", "사과", "바나나", "레몬", "복숭아"]

fruits.splice(1, 2); // 지정하면? 지정한 만큼만 삭제!
console.log(fruits); // (3) ["포도", "레몬", "복숭아"]

fruits.splice(1, 1, '수박', '참외'); // 삭제하고, 추가하기!
console.log(fruits); // (4) ["포도", "수박", "참외", "복숭아"]

// combine two arrays
const fruits2 = ['망고', '두리안'];
const newFruits = fruits.concat(fruits2); // 합체!
console.log(newFruits); // (6) ["포도", "수박", "참외", "복숭아", "망고", "두리안"]

// 5. Searching

console.log(fruits); // (4) ["포도", "수박", "참외", "복숭아"]

// indexOf : find the index
console.log(fruits.indexOf('복숭아')); // 3
console.log(fruits.indexOf('대추')); // -1

// includes
console.log(fruits.includes('대추')); // false
console.log(fruits.includes('수박')); // true

// lastIndexOf
fruits.push('복숭아');
console.log(fruits); // (5) ["포도", "수박", "참외", "복숭아", "복숭아"]
console.log(fruits.indexOf('복숭아')); // 3 // indexOf 는 처음 찾은 값의 index 값을 리턴!
console.log(fruits.lastIndexOf('복숭아')); // 4 // lastIndexOf 는 마지막으로 찾은 index 값을 리턴!