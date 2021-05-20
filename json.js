// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"] // ""더블쿼터로 출력. JSON 의 규격 사항?

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2021-05-20T06:25:04.874Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); // {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`); // key : , value : [object Object] // 제일 최상위 데이터 전달, 다음부터 key, value 전달
    return key === 'name' ? 'Hyun' : value; // 키에 이름 들어오면 Hyun, 아니면 원래 값 사용!
});
console.log(json);
console.log('--------------')

// 2. JSON to Object
// parse(json)

json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj); // {name: "tori", color: "white", size: null, birthDate: "2021-05-20T06:36:33.220Z"}
rabbit.jump(); //  can jump!
// obj.jump() // error! JSON 변환시 함수는 포함되지 않는다! 하여 jump 함수 작동 안됨!

console.log(rabbit.birthDate.getDate()); // 20 ? 날자!
// console.log(obj.birthDate.getDate()); // error! // JSOM으로 변환한 obj의 birthDate는 string이기때문!

const obj1 = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value; // reviver 콜백 함수? 
});

console.log(obj1.birthDate.getDate()); // 20 // 

// 유용한 사이트

// JSON Diff checker: http://www.jsondiff.com/ // 서버요청 1, 2번 데이터 비교

// JSON Beautifier/editor: https://jsonbeautifier.org/ // 복붙 포멧 정렬

// JSON Parser: https://jsonparser.org/ // JSON 타입 오브젝트 형태로 확인

// JSON Validator: https://tools.learningcontainer.com/json-validator/ // JSON 데이터 오류확인