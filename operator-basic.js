
// flase : 0, -0, '', null, undefined
// true : -1

let num; // nudefinde

if (num) { // false
    console.log('true');
} else {
    console.log('false!');
}

let num1;
num1 && console.log(num1); // 출력안됨

let num2 = 9;
num2 && console.log(num2); // 9

let obj = {
    name : 'Hyun', // 있고, 없고 실험
}
if (obj) {
    console.log(obj.name); // 
}
obj && console.log(obj.name); //