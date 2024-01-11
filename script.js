class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Example usage:

// Create a Person
const person = new Person("John", 25);

console.log(person.name); // Output: John
console.log(person.age);  // Output: 25

// Update age using the setter
person.age = 26;
console.log(person.age);  // Output: 26

// Create a Student
const student = new Student("Alice", 20);

console.log(student.name); // Output: Alice
console.log(student.age);  // Output: undefined (using the getter)

student.study(); // Output: Alice is studying.

// Create a Teacher
const teacher = new Teacher("Mr. Smith", 35);

console.log(teacher.name); // Output: Mr. Smith
console.log(teacher.age);  // Output: undefined (using the getter)

teacher.teach(); // Output: Mr. Smith is teaching.

  