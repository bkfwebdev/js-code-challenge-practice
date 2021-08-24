function createPhoneNumber(numbers){
    let areaCode = "";
    let firstThree = "";
    let lastFour = "";
    
    //get area code
    for (let x = 0 ; x <= 2; x++){
      areaCode = areaCode + numbers[x].toString();
    }
    areaCode = "(" + areaCode + ") ";
  //get first three  
    for (let x = 3; x<= 5; x++ ){
      firstThree = firstThree + numbers[x].toString();
    }
   //get last four
    for (let x=6 ; x<=9 ; x++){
      lastFour = lastFour + numbers[x].toString();
    }
   //create final string
    phoneNumber = areaCode + firstThree + "-" + lastFour;
    return phoneNumber
  }