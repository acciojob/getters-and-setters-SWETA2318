// Class definitions

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  // Constructor for Student class
  constructor(name, age) {
    super(name, age);
  }

  // Method specific to Student class
  study() {
    console.log(${this.name} is studying);
  }
}

class Teacher extends Person {
  // Constructor for Teacher class
  constructor(name, age) {
    super(name, age);
  }

  // Method specific to Teacher class
  teach() {
    console.log(${this.name} is teaching);
  }
}

// Assigning classes to the window object
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

  