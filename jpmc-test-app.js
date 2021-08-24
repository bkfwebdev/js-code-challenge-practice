function isAnnagram (string1,string2){
    // check minium condition
    let condition1 = string1.length == string2.length;
    if (condition1 == false){return condition1}
    // check if characters in string1 are in string2
    let max = string1.length;
    let count = 0;
    for (let index = 0; index < max ; index++){
        for(let index2 = 0; index2 < max ; index2++)
        if (string1.charAt(index) == string2.charAt(index2)){count++}
    }
    if (count == max){ return true }
}

string1 [0]  count[0]