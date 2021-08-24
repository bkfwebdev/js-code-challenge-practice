let myInput = process.argv;
let sorted1 = (Array.from(myInput[2]).sort()).toString();
let sorted2 = (Array.from(myInput[3]).sort()).toString();
if (sorted1 == sorted2){console.log("yes these are anagrams")} else{console.log("no, these are not anagrams")};