function validParentheses(parens){
    //TODO 
    let theLength = parens.length;
    console.log(parens);
    console.log(theLength);
    let openTerm = null;
    let closeTerm = null;
    if (parens.charAt(0) == ")" ){return false}
    if (parens.charAt(theLength-1) == "(" ){return false}
    let leftCount = 0;
    let rightCount = 0;
    let totalTerms = 0;
    for (let x = 0 ; x < theLength ; x++){
      if(parens.charAt(x) == "("){
        leftCount++;
        openTerm = true
      } else
      if(parens.charAt(x) == ")"){
        rightCount++;
        closeTerm = true
      }
      
      if (openTerm && closeTerm){
        totalTerms++
        openTerm = false;
        closeTerm = false; 
      }
      
    }
    if (rightCount == leftCount){return true}
    else if (theLength/2 !== totalTerms){return false}
   
  }