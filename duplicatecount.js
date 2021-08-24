function duplicateCount(text) {
  let myData = text.toLowerCase();
  max = myData.length;
  let dups = [];
  myData = Array.from(myData).sort();
  let target = null;
  let count = 0;
  for (let index = 0; index < max; index++) {
    target = myData[index];
    for (let index2 = 0; index2 < max; index2++) {
      if (myData[index2] == target) {
        count++;
      }
    }
    if (count > 1 && !dups.includes(target)) {
      dups.push(target);
    }
    count = 0;
  }
   return dups.length;
}
