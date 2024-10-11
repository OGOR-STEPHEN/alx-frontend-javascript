// DirectorInterface with the required methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with the required methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Example usage
const employee1 = createEmployee(200);
console.log(employee1.workFromHome()); // Output: Cannot work from home
console.log(employee1.getCoffeeBreak()); // Output: Cannot have a break
console.log(employee1.workTeacherTasks()); // Output: Getting to work

const employee2 = createEmployee(1000);
console.log(employee2.workFromHome()); // Output: Working from home
console.log(employee2.getCoffeeBreak()); // Output: Getting a coffee break
console.log(employee2.workDirectorTasks()); // Output: Getting to director tasks

// DirectorInterface and TeacherInterface are assumed to be defined already
// Director and Teacher classes are assumed to be defined already

// Type predicate function to check if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on the type of employee
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

const director = new Director();
const teacher = new Teacher();

executeWork(director); // Output: Getting to director tasks
executeWork(teacher); // Output: Getting to work

// Define the Subjects string literal type
type Subjects = 'Math' | 'History';

// Implement the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

console.log(teachClass('Math'));    // Output: Teaching Math
console.log(teachClass('History')); // Output: Teaching History
