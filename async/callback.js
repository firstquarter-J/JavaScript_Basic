'use strict';

// Synchronous callback
function printImmediately(print) { // 함수선언 -> hoisting
    print();
}

// Asunchronous callback
function printWithDelay(print, timeout) { // 함수선언 -> hoisting
    setTimeout(print, timeout);
}

// JavaScript is synchronous.
// Execute the code block by orger after hoisting. // 호이스팅 된 이후부터 작성 순서에 맞춰 동기적으로 실행
// hoisting ? var, function declaration // 함수 선언들이 제일 위로 올라간다

console.log('1'); // 동기
// setTimeout(function() { // setTimeout ? 브라우저 api로 브라우저 호출!
//     console.log('2'); // 1초 후 실행!
// }, 1000);
setTimeout(() => console.log('2'), 1000); // 비동기 

console.log('3'); //동기

printImmediately(() => console.log('Hello')); // 동기

printWithDelay(() => console.log('async callback'), 2000); // 비동기
// 순서!
// 1출력 -> setTimeout함수 호출 -> 3출력 -> printImmediately함수 호출시 바로 Hello 출력 -> printWithDelay함수 호출 -> 2출력 -> asynce callback 출력

// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'Hyun' && password === 'jang') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'Hyun') {
                onSuccess({ name : 'Hyun', role : 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    }, 
    (error) => {
        console.log(error);
    }
);