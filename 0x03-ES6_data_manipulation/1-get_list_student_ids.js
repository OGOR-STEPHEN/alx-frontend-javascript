function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((student) => student.id); // Added parentheses around `student`
}

// Example usage:
const students = getListStudents(); // Ensure `getListStudents` is defined or imported correctly
console.log(getListStudentIds(students)); // Output: [1, 2, 5]

