var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  if (iterable == [] || iterable == "") {
    return [];
  }
  let myData = null;
  let myOutput = [];
  if (typeof iterable == "string") {
    myData = Array.from(iterable);
  } else {
    myData = iterable;
  }
  myOutput.push(myData[0]);
  let myMax = myData.length;
  for (let index = 1; index < myMax; index++) {
    if (myData[index] !== myData[index - 1]) {
      myOutput.push(myData[index]);
    }
  }
  return myOutput;
};

/*
Test Results:
lets test it
should work with empty array
Test Passed
Completed in 2ms
should work with one element
Log
A
[ 'A' ]
Test Passed
Completed in 3ms
should reduce duplicates
Log
AA
[ 'A' ]
AAAABBBCCDAABBB
[ 'A', 'B', 'C', 'D', 'A', 'B' ]
AADD
[ 'A', 'D' ]
AAD
[ 'A', 'D' ]
ADD
[ 'A', 'D' ]
Test Passed
Completed in 1ms
and treat lowercase as different from uppercase
Log
ABBCcAD
[ 'A', 'B', 'C', 'c', 'A', 'D' ]
Test Passed
and work with int arrays
Log
[ 1, 2, 3, 3 ]
[ 1, 2, 3 ]
Test Passed
Completed in 1ms
and work with char arrays
Log
[ 'a', 'b', 'b' ]
[ 'a', 'b' ]
Test Passed
Completed in 1ms
Completed in 13ms
*/