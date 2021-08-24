/*
codewars - parseInt code challenge

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
*/

function parseInt(string) {
  // TODO: it's your task now
  let data = {
    ones: [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ],
    tens: [
      "placeholder",
      "ten",
      "twenty",
      "thirty",
      "fourty",
      "fifty",
      "sixty",
      "seventy",
    ],
    teens: [
      "placeholder",
      "eleven",
      "twelve",
      "thirteeen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ],
    htm: ["hundred", "thousand", "million"],
  };
  let value = 0;
  string = string.replace("-"," ");
  let wordArray = string.split(/\s+/);
  let max = wordArray.length;
  /* Handle 0 - 9 */
  if (data.ones.includes(string)) {
    value = data.ones.indexOf(string);
  }
  /* handle 10 + 1 through 9 */
  if (data.teens.includes(string)) {
    value = data.teens.indexOf(string) + 10;
  }
  /* Handle multiples of 10 */
  if (data.tens.includes(string)) {
    value = data.tens.indexOf(string) * 10;
  }

  /* parse complex numerical sentence 

  thinking out loud
  
  if the sentence is longer than one word 
  then the first word is a multiplier of the second word 
  unless it is a multiple of ten followed by a number less than 10

  e.g. "Forty Five Thousand Sixty Two" = ((40 + 5) x 1000 ) + (60 + 2)

  forty > five so add 40 and 5 , 45 < thousand so multiply 45 times a thousand , 45k > sixty so add sixty , 45,060 > 2 , add 2

  determine if word at index in greater or less than word at index + 1

  if greater then determine data set for word one and word two , add value of word one and word two to total value

  if less then determine data set for word one and word two multiply word one and word two , add value to total value

  return total value

  */


  console.log(string, value);
  return value;
}
