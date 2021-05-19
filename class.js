'use strict';
// Object-oriendted programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name} : Hello!`);
    }
}

const Hyun = new Person('Hyun', 34);
console.log(Hyun.name); // Hyun
console.log(Hyun.age); // 34
Hyun.speak(); // Hyun : Hello!

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastname = lastName;
        this.age = age;
    }
    get age() { // get 으로 리턴
        return this._age;
    }
    set age (value) { // set 으로 값 설정
        // if (value < 0) { // 공격적!!? 
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value; // 보통 이렇게~?
    }
}
// get age() : 게터 정의 된 순간 this.age는 메모리에 올라간 데이터를 읽는 것이 아닌 게터 호출.
// set age() :  세터 정의 된 순간 = age;할때, 즉 값을 할당할 때 바로 메모리 값을 할당하는 것이 아닌, 세터 호출
// 세터 안에서 전달된 value를 this.age에 할당할 때 메모리의 값을 업데이트 하는 것이 아니라 세터를 호출! 무한반복.
// 게터와 세터 안에서 사용되는 변수명을 다르게! 통상적으로 _변수

const user1 = new User('Hyun', 'Jang', -1);
console.log(user1.age); // 0

// 3. Fields (public, private)
// Too soon!?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2; // 생성자 사용하지 않고 필드 정의. 퍼블릭(외부 접근 가능)
    #privateField = 0; // #기호 붙이면 클래스 내부에서만 값이 보여지고 접근, 변경 가능!
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too sonn!?
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
// 클래스 안의 필드와 메소드들은 새 오브젝트를 만들 때 마다 복제되어 값만 지정된 값으로 변경되어 만들어지는데
// 간혹 이런 오브젝트, 데이터와 상관 없이 클래스가 갖고 있는 고유값과 데이터와 상관 없이 동일하게 반복되어 사용되는 메소드가 있을 수 있는데
// static 키워드를 붙이면 오브젝트에 상관 없이 클래스 자체에 연결!?

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined // static은 클래스 자체에 붙었기 때문에
console.log(Article.publisher); // Dream Coding // 오브젝트가 아닌 클래스에서 호출해 사용!
Article.printPublisher(); // Dream Coding
// 오브젝트, 들어오는 데이터와 상관 없이 공통적으로 클래스에서 쓸 수 있는 거라면 static, static method를 이용하여 작성하면 메모리 사용량 감소!

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // 상속!
class Triangle extends Shape { // overriding!
    draw() { // 재 정의!
        super.draw(); // 재 정의 후 기존 부모클래스의 함수 호출하고 싶다면 super!
        console.log('삼각형!')
    }
    getArea() { // 역시 재 정의
        return ((this.width * this.height) / 2);
    }
    toString() {
        return `Triangle : color : ${this.color}`; // toString 오브젝트 상속하여 정의
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of // 오버라이딩 후엔 출력되지 않음! // 재정의한 함수만 호출!
console.log(triangle.getArea()); // 200

// 6. Class checking instanceOf // 좌항이 우항을 상속받았는지 true of false 로 검증!
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // flase
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // ture
console.log(triangle instanceof Object); // true // 우리가 자바스크립트에서 만든 모든 오브젝트 클래스들은 자바스크립트의 오브젝트를 상속!
console.log(triangle.toString()); // Triangle : color : red // 오브젝트의 오브젝트를 상속받아 출력!