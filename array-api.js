// Q1. make a string out of a array
{   
    const fruits = ['apple', 'banana', 'orange'];

    const result = fruits.join(); // join ? 배열의 모든 값을 더하여 문자열로 리턴!
    const result2 = fruits.join(' and ') // 구분자 사용 가능!
    console.log(result); // apple,banana,orange
    console.log(result2); // apple and banana and orange
}
// Q2. make an array out of a string
{
    const fruits = '사과, 딸기, 배, 복숭아';
    const result = fruits.split(','); // split ? 전달받은 구분자로 문자열로 나눠준다! 리턴받을 배열의 길이도 지정 가능!
    const result2 = fruits.split(',', 2);
    console.log(result); // (4) ["사과", " 딸기", " 배", " 복숭아"]
    console.log(result2); // (2) ["사과", " 딸기"]
}
// Q3. make this array look like this : [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); // reverse ? 배열 자체를 거꾸로 바꿔줌!
    console.log(result); // (5) [5, 4, 3, 2, 1]
}
// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.splice(0, 2); // splice ? 배열 자체에서 지정된 값을 삭제 후 리턴!
    console.log(result); // (2) [1, 2]
    console.log(array); // (3) [3, 4, 5]
}
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(0, 2); // slice ? 배열의 특정 부분을 지정하여 리턴! 0~ < 2 까지!
    console.log(result); // (2) [1, 2]
    console.log(array); // (5) [1, 2, 3, 4, 5]
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90

{   // find ? 주어진 조건을 배열 내에서 전부 찾은 후 맞는 값을 리턴! // 콜백 함수를 만들어 전달!
    const result = students.find(function(student, index) { 
        console.log(student, index); // student, index 값 전부 찾아서 출력!
    });
}
{
    const result = students.find(function(student) { // find ? 불리언 타입 true가 나오면 리턴!
        return student.score === 90; // 조건이 맞으면 리턴!
    });
    console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
}
{   // arrow function 사용하여 한줄로 줄여쓰기!
    const result = students.find((student) => student.score === 90);
    console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{   // filter ? 콜백 함수로 true 만 찾아 새로운 배열로 리턴!
    const result = students.filter((student) => student.enrolled);
    console.log(result); // (3) [Student, Student, Student]
}

// Q7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]
{   // map ? 배열 안의 모든 요소들을 설정된 기능의 콜백 함수를 거쳐 값을 변환하여 저장
    const result = students.map((student) => student.score);
    console.log(result); // (5) [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{   // some ? 배열 요소 중 콜백 함수가 true 리턴이 되는 요소가 있는지 검증!
    const result = students.some((student) => student.score < 50); // 하나라도 조건이 만족하면 true 를 리턴!
    console.log(result); // true
}
{   // every ? 모든 요소들이 조건을 충족해야만 true 리턴
    const result = students.every((student) => student.score > 44);
    console.log(result); // true
}

// Q9. compute students' average score
{   // reduce ? 원하는 시작점부터 모든 배열의 값을 누적하여 리턴!
    const result = students.reduce((prev, curr) => { // 이전값은 리턴 해 주는 값을 전달, 현재값은 배열 하나씩 순차적으로 전달 
        console.log('--------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score; // 현재값이 리턴되며 이전값으로, 반복하며 새로운 현재값이 대입되어 합을 구한다!
    }, 0); // 주어진 이니셜 값부터 시작
    console.log(result); // 369
}
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length); // 73.8
}

// Q10. nake a string containig all the scores
// result should be : '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score);
    console.log(result); // (5) [45, 80, 90, 66, 88]
}
{
    const result = students.map((student) => student.score).join();
    console.log(result); // 45,80,90,66,88
}
{
    const result = students
        .map((student) => student.score)
        .filter(score => score >= 50) // 기가 막힌데!?
        .join();
    console.log(result); // 80,90,66,88
}

// Bonus! do Q10 sorted in ascending order
// result should be : '45, 66, 80, 88, 90'
{   // sort ? 콜백 함수에 리턴된 값이 마이너스면 첫번째 값이 두번째 값보다 작다고 여기고 정렬!
    const result = students.map(student => student.score)
    .sort((a, b) => a - b) // 역순은? b - a !
    .join();
    console.log(result); // 45,66,80,88,90
}