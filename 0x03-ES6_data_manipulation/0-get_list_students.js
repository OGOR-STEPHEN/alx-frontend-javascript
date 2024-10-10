function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' }, // Trailing comma
  ];
}

// Option 1: Call the function
console.log(getListStudents());

// Option 2: Export the function
// module.exports = getListStudents;
