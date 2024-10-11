// Define MajorCredits and MinorCredits interfaces
interface MajorCredits {
  credits: number;
  // A brand property for nominal typing
  brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  // A brand property for nominal typing
  brand: "MinorCredits";
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits", // Preserve the brand for the returned object
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits", // Preserve the brand for the returned object
  };
}

// Example usage
const majorCourse1: MajorCredits = { credits: 30, brand: "MajorCredits" };
const majorCourse2: MajorCredits = { credits: 40, brand: "MajorCredits" };

const minorCourse1: MinorCredits = { credits: 10, brand: "MinorCredits" };
const minorCourse2: MinorCredits = { credits: 20, brand: "MinorCredits" };

const totalMajorCredits = sumMajorCredits(majorCourse1, majorCourse2);
const totalMinorCredits = sumMinorCredits(minorCourse1, minorCourse2);

console.log(`Total Major Credits: ${totalMajorCredits.credits}`);  // Output: 70
console.log(`Total Minor Credits: ${totalMinorCredits.credits}`);  // Output: 30
