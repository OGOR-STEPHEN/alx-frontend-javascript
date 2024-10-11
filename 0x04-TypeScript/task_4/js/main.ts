/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Adding `experienceTeachingC` to the Teacher interface
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }

  // Export constant cpp
  export const cpp = new Cpp();
}

/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Adding `experienceTeachingJava` to the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }

  // Export constant java
  export const java = new Java();
}

/// <reference path="./Subject.ts" />

namespace Subjects {
  // Declaration merging: Adding `experienceTeachingReact` to the Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }

  // Export constant react
  export const react = new React();
}

/// <reference path="./Cpp.ts" />
/// <reference path="./Java.ts" />
/// <reference path="./React.ts" />

// Create a Teacher object cTeacher with experienceTeachingC = 10
const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp subject
console.log('C++');
Subjects.cpp.setTeacher(cTeacher);
console.log(Subjects.cpp.getRequirements());        // Output: Here is the list of requirements for Cpp
console.log(Subjects.cpp.getAvailableTeacher());    // Output: Available Teacher: John

// Java subject
console.log('Java');
Subjects.java.setTeacher(cTeacher);
console.log(Subjects.java.getRequirements());       // Output: Here is the list of requirements for Java
console.log(Subjects.java.getAvailableTeacher());   // Output: No available teacher (because cTeacher has no Java experience)

// React subject
console.log('React');
Subjects.react.setTeacher(cTeacher);
console.log(Subjects.react.getRequirements());      // Output: Here is the list of requirements for React
console.log(Subjects.react.getAvailableTeacher());  // Output: No available teacher (because cTeacher has no React experience)
