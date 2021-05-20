'use strict';

// async & await
// clear style of using promise!

// 1. async
async function fetchUser() { // async 선언하면 코드블럭이 promise로 자동 선언!
    // do network request in 10 secs...
    return 'Hyun';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}
// {
// async function pickFruits() { // 각 1초씩 2초 걸리는 비동기 처리를?
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log);
// }

{
async function pickFruits() { // 병렬 실행시켜 1초 걸리는 동기 처리로!
    const applePromise = getApple(); // promise 선언 한 순간 블럭이 promise로!? // 그러나
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `병렬 + ${apple} + ${banana}`;
}
pickFruits().then(console.log);
}

// 3. uesful Promise APIs
// all ? promise 배열을 전달하게 되면 모든 promise들이 병렬적으로 다 받을때까지 모아준다?
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

// race ? 선착순 첫번째 리턴값만 출력!
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);

