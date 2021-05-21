'use strict';

// number, stinrg, boolean, null, undefined
let age = 2;
let age2 = age;
// age 공간, age2 공간 따로 메모리에 할당
// age2의 공간에 age이 들어갔음!

age2 = 3; // 재정의 하면!?
console.log(age); // 2
console.log(age2); // 3

// object
let obj = {
    name : 'Hyun',
    age : 34,
};
// name, age 각각 메모리 할당
// 그 할당된 메모리들을 묶은 주소가 object
console.log(obj.name); // Hyun

let obj2 = obj;
console.log(obj2.name); // Hyun
// object 는 주소(reference)만 복사됨

obj2.name = 'james';  // 재정의 하면!?
// 주소만 복사되고 값은 복사한 것이 아니기 때문에 오브젝트 내부 값을 변경하면 
// 어떤 오브젝트를 타고 들어가서 변경하던 다 바뀜!
// 주소 ? reference
console.log('------');
console.log(obj.name); // janmes
console.log(obj2.name); // janmes

