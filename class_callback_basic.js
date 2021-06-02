class Counter {
    constructor(runEveryFIveTimes) {
        this.counter = 0;
        this.callback = runEveryFIveTimes;
    }

    increse() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num) {
    console.log(`What the hell!? ${num}`);
}

function alertNum(num) {
    alert(`alert! ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);


