export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation here.
    const success = true; // Change this condition based on the response logic.

    if (success) {
      resolve('Success response');
    } else {
      reject('Error response');
    }
  });
}

