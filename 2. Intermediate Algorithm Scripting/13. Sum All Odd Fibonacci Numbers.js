// ====== Sum All Odd Fibonacci Numbers ====== //

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.


function sumFibs(num) {

  var numA = 0;
  var numB = 1;
  var sum = 0;

    while (numB <= num) {
      // check if the number is odd
      if (numB %2 !==0) {
        // add to sum
        sum += numB;
      }
      // record added value before changing the num values
      var added = numA + numB;
      numA = numB;
      // the next Fibonacci number is the sum of the previous two
      numB = added;
    }
  return sum;
}

sumFibs(1000);
// 1785 //
sumFibs(4000000);
// 4613732 //
sumFibs(4);
// 5 //
sumFibs(75024);
// 60696 //
sumFibs(75025);
// 135721 //
