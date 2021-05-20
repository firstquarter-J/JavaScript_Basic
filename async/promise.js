'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the excutor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('Hyun');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers : then, catch, finally
promise // 
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { // 무조건 실행!
        console.log('finally');
    });

    // 3. Promise chaining
    const fetchNumber = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000);
    })
    // then ? 값을 바로 전달할 수 있고 또 다른 비동기인 promise를 전달해도 된다!
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then(num => console.log(num)); // 5 // 2초 소요

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
});
const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 달걀`), 1000);
});
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 달걀프라이`), 1000);
});
getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));

{
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
});
const getEgg = hen => 
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
});                      // 에러 구간 설정
const cook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 달걀프라이`), 1000);
});
getHen() // 받아오는 값이 하나면 생략해서 작성 가능!
.then(getEgg)
.catch(error => { // 오류 처리!
    return '빵';
})
.then(cook)
.then(console.log)
.catch(console.log); // 에러 캐치!
}

