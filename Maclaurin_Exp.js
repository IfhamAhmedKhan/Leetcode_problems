
// Maclaurin series using exponential function
function maclaurinExponential(x, terms) {
    let result = 1; // First term of the series
  
    for (let i = 1; i < terms; i++) {
      result += (Math.pow(x, i) / factorial(i));
    }
  
    return result;
  }
  
  // Helper function to calculate factorial
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Example usage:
  const xValue = 0.7; // Replace with the desired value of x
  const numberOfTerms = 10; // Replace with the desired number of terms
  
  const approximation = maclaurinExponential(xValue, numberOfTerms);
  console.log(" **** Maclurin Series Exponential function ****")
  console.log(" **** Approximation of e^"+xValue+" ****")
  console.log(" **** Number of Terms : "+numberOfTerms+" ****" )
  console.log(" **** Terms : "+approximation+" ****")