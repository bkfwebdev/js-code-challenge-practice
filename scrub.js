 // I used my own method to get input
// I could not get input from the method provided

/* Remove Characters
Programming challenge description:
Write a program to remove specific characters from a string.
Input:
Your program should read lines of text from standard input. Each line of input will be a string followed by a comma followed by characters that need to be scrubbed.
Output:
Print to standard output the scrubbed strings, one per line. Trim out any leading/trailing whitespaces if they occur.
Test 1
Test Input
Download Test 1 Input
how are you, abc
Expected Output
Download Test 1 Input
how re you
Test 2
Test Input
Download Test 2 Input
hello world, def
Expected Output
Download Test 2 Input
hllo worl
*/

function getArgs(){
    console.log("get args")
	let myInput = process.argv;
    return myInput
}

function scrub(string,targets){
    console.log("Scrubbing")
    console.log(targets);
    let newString = ""
    for(let index = 0; index < targets.length; index++){
        newString = string.replace(targets.charAt(index),"");
        console.log(string,targets.charAt(index));
    }
    return newString;
}

let myData = getArgs();
let scrubTargets = myData[myData.length-1];
let stringStartIndex = 2;
let stringEndIndex = myData.length - stringStartIndex;
let newStringData = []
for (let x = stringStartIndex; x <= stringEndIndex; x++){
    newStringData.push(scrub(myData[x],scrubTargets))
    console.log(myData[x],scrubTargets)
}
console.log(newStringData);

let outPutString = "";
console.log("forming output string")
for (let x = 0; x < newStringData.length; x++){
    outPutString = outPutString + newStringData[x] + " ";
}

console.log(outPutString);


