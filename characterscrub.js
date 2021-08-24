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
	let myInput = process.argv;
    console.log(process.argv)

}