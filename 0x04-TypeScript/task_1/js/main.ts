// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 30,
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'James',
  lastName: 'Smith',
  age: 25,
  location: 'Columbia',
};

// Create an array to store the students
const studentsList: Student[] = [student1, student2];

// Function to render a table
function renderTable(students: Student[]): void {
  // Create the table element
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  // Loop through studentsList to create rows
  students.forEach((student) => {
    const row = document.createElement('tr');

    // Create a cell for first name
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    // Create a cell for location
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append the cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });

  // Append the body to the table
  table.appendChild(tableBody);

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // Optional attribute
  location: string;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // Additional attribute required by Directors
}

  interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));  // Output: J. Doe

// Define the constructor interface
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Define the class interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method to indicate working on homework
  workOnHomework(): string {
    return 'Currently working';
  }

  // Method to return the student's first name
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: 'John', lastName: 'Doe' });

console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

