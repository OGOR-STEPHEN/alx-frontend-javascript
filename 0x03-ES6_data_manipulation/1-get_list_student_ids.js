function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map(student => student.id);
}

// Example usage:
const students = getListStudents();
console.log(getListStudentIds(students)); // Output: [1, 2, 5]
