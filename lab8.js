// Exercise 1: Filter Function on String Object
String.prototype.filter = function(bannedWords) {
    return this.split(' ').filter(word => !bannedWords.includes(word)).join(' ');
};
console.log("This house is not nice!".filter(['not'])); // Output: "This house is nice!"

// Exercise 2: Bubble Sort Algorithm on Array Object
Array.prototype.bubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]]; // Swap elements
            }
        }
    }
    return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort()); // Output: [-2, 0, 1, 3, 4, 6]

// Exercise 3: Teacher Object Using Function Constructor
function Person(name) {
    this.name = name;
}
Person.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};
let teacher1 = new Person('John');
teacher1.teach('Math'); // Output: "John is now teaching Math"

// Exercise 3: Teacher Object Using Object.create
const person = {
    name: '',
    teach(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
};

function createTeacher(name) {
    let teacher = Object.create(person);
    teacher.name = name;
    return teacher;
}

let teacher2 = createTeacher('John');
teacher2.teach('Math'); // Output: "John is now teaching Math"

// Exercise 4: Person, Student, and Professor Objects Using Prototype Approach
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};
Person.prototype.salute = function() {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}
Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

// Example usage
let student = new Student('Alice', 20, 'Computer Science');
student.greet();
student.salute();
// Output:
// "Hey, my name is Alice and I am studying Computer Science."
// "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"

let professor = new Professor('Dr. Smith', 50, 'Physics');
professor.greet();
professor.salute();
// Output:
// "Good day, my name is Dr. Smith and I am in the Physics department."
// "Good morning!, and in case I don't see you, good afternoon, good evening and good night!"
