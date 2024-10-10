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

// Create an array of students
const studentsList: Student[] = [student1, student2];
function renderTable(students: Student[]): void {
  // Create table element
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  // Loop through studentsList to create rows
  students.forEach((student) => {
    const row = document.createElement('tr');

    // Create cells for first name and location
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

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

  // Append the table to the DOM
  document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);

