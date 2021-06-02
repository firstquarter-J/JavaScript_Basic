// Shorthand property names
{
    const Huyn1 = {
        name: 'Hyun',
        age: '34',
    };
    
    const name = 'Hyun';
    const age = '18';

    const Hyun2 = {
        name: name,
        age: age,
    };

    const Hyun3 = { // key, value 이름이 동일하면 축소사용가능!
        name,
        age,
    };
    console.log(Huyn1, Hyun2, Hyun3); // {name: "Hyun", age: "18"} * 3
}

// Destructuring Assignment
    // object
{
    const student = {
        name: 'Hyun',
        level: 1,
    };
    {   // 기존 방식
        const name = student.name;
        const level = student.level;
        console.log(name, level); // Hyun 1
    }
    {   // 기존 방식 대비 간소화 가능!
        const { name, level } = student;
        console.log(name, level); // Hyun 1

        const { name: studentName, level: studentLevel } = student;
        // 변수명 변경도 가능!
        console.log(studentName, studentLevel); // Hyun 1
}
    // array
    const animals = ['고양이', '개'];

    {   // 기존 방식
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }
    {   // 간소화!
        const [first, second] = animals;
        console.log(first, second);
    }
}

// Spread Syntax
{
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [ obj1, obj2 ];

    // array copy
    const arrayCopy = [...array]; // 복사!
    console.log(array, arrayCopy); // 동일하게 출력가능

    const arrayCopy2 = [...array, { key: 'key3' }]; // 손쉽게 추가
    console.log(arrayCopy2);
    obj1.key = 'newKey';
    console.log(array, arrayCopy, arrayCopy2);
    // 주소(reference)만 복사해 올 뿐, 값을 변경시키지 않는 spread.
    // 원본 값이 바뀌면 전부 다 바뀌니 유의!

    // object copy
    const obj3 = { ...obj1 }; // 복사!
    console.log(obj3); // {key: "newKey"}

    // array concatenation
    const fruits1 = ['복숭아', '딸기'];
    const fruits2 = ['바나나', '키위'];
    const fruits = [...fruits1, ...fruits2]; // 합체!
    console.log(fruits);

    // object merge // 동일한 값이면 제일 뒤의 키값이 최종적으로 덮어씌워진다!
    const dog1 = { dog1: '리트리버' };
    const dog2 = { dog2: '보더콜리' };
    const dog = { ...dog1, ...dog2 }; // 합체!
    console.log(dog);
}   

// Default parameters
{
    {
        function printMessage(message) {
            console.log(message);
        }
        printMessage('hello');
        printMessage(); // undefined
    }
    {
        function printMessage(message = 'default message') {
            console.log(message);
        }
        printMessage(); // default message
    }
}

// Ternary Operator
{
    const isCat = false;
    {
        let component;
        if (isCat) {
            component = '삼색';
        } else {
            component = '이얏호응';
        }
        console.log(component);
    }
    {
        const component = isCat ? '삼색' : '이얏호응';
        console.log(component);
    }
}

// Template Literals
{
    const weather = '맑음';
    const temparature = '31℃';
    console.log('today weather is ' + weather + ' and temparature is ' + temparature);
    //불편! 대신?
    console.log(`today weather is ${weather} and temparature is ${temparature}`);
}

// Optional Chaining (ES11)
{
    const person1 = {
        name: 'Hyun',
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Ellie',
            },
        },
    };
    const person2 = {
        name: 'Ellie',
    };
    {   // 난감... 그렇다면?
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1); // Ellie
        // printManager(person2); // Error!
    }
    {   // 삼항연산자 사용
        function printManager(person) {
            console.log(
                person.job
                    ? person.job.manager
                        ? person.job.manager.name
                        : undefined
                    : undefined
            );
        }
        printManager(person1); // Ellie
        printManager(person2); // undefined
    }
    {   // 길다 길어... 그렇다면?
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1); // Ellie
        printManager(person2); // undefined
    }
    {   // Optional Chaining // 기가막힘
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1); // Ellie
        printManager(person2); // undefiend
    }
}

// Nullish Coalescing Operator (ES11)
    // Logical OR operator
    // false : false, '', 0, null, undefined
{
    {
        const name = 'Hyun';
        const userName = name || 'Guest'; 
        //name에 값이 들어있으므로 true로 실행! // 없다면? false! 즉 Guest 출력
        // 하지만 네임이 문자열 공백('')일 경우에도 게스트로 출력되는 문제가!
        // 숫자가 0으로 지정될 경우에도 동일한 문제!
        // 왜? 0도 false 로 간주되기 때문에
        console.log(userName); // Hyun
    }
    {   // Nullish Coalescing Operator 좋쥬?
        const name = ``;
        const userName = name ?? 'Guest';
        console.log(userName); // 공백 출력

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message); // 0
    }
}