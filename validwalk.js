function isValidWalk(walk) {
    //insert brilliant code here
    let time = null;
    let space = null;
    let x = 0;
    let y = 0;
    let max = walk.length;
    if (max == 10){time = true}
    for (let index = 0; index  <= max - 1 ; index++){
      if (walk[index] = 'n'){y++}
      if (walk[index] = 's'){y--}
      if (walk[index] = 'e'){x++}
      if (walk[index] = 'w'){x--}
      }
    if (x == 0 && y == 0){space = true}
    return time && space
    }