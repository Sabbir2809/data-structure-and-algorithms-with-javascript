/*
  Author: Sabbir Hossain
  Problem Name: Given an integer n find the  factorial of that integer. 
  In mathematics, the factorial of a non-negative integer n denoted n!, is the product of all
  positive integers less than or equal to n. Factorial of zero is 1.
*/

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

/*
  Big-O Notation:-
  - Time Complexity: O(n) Linear
*/
