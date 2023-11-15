/*
Filename: ComplexCode.js
Content: Complex Code Example
*/

// Define a class called Employee
class Employee {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}`;
  }

  // A complex method that calculates the salary based on the role
  calculateSalary() {
    let salary;

    switch (this.role) {
      case 'Manager':
        salary = 100000;
        break;
      case 'Developer':
        salary = 80000;
        break;
      case 'Designer':
        salary = 60000;
        break;
      default:
        salary = 50000;
    }

    return salary;
  }
}

// Create an array of employees objects
const employees = [
  new Employee('John', 30, 'Manager'),
  new Employee('Sarah', 25, 'Developer'),
  new Employee('Mike', 35, 'Designer'),
  new Employee('Emily', 40, 'Marketing'),
  new Employee('David', 28, 'Developer'),
];

// A complex function that calculates the average salary of all employees
function calculateAverageSalary(employees) {
  let totalSalary = 0;

  employees.forEach((employee) => {
    totalSalary += employee.calculateSalary();
  });

  return totalSalary / employees.length;
}

// Print information and salary for each employee
employees.forEach((employee) => {
  console.log(employee.getInfo());
  console.log(`Salary: $${employee.calculateSalary()}`);
});

// Print the average salary of all employees
console.log(`Average Salary: $${calculateAverageSalary(employees)}`);

// A complex and recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Calculate the factorial of a number
const number = 5;
console.log(`Factorial of ${number}: ${factorial(number)}`);

// ...

// More complex code can be added here

// ...