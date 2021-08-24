let input = process.argv;
console.log(input)
let maxInput = input.length - 1

function reverseIt(mystring){
    let max = mystring.length-1;
    let result = "";
    for (let index = max ; index >= 0; index--){
        result = result + mystring.charAt(index);
    }
    return result;
}

function compare(string1 , string2){
    if (string1 == string2){
        return true;
    } else {
        return false;
    }
}

for (let index = 2; index <= maxInput; index++){
    let string1 = input[index]
    let string2 = reverseIt(string1)
    console.log(string1,string2)
    console.log("is palindrome ", compare(string1,string2))
}