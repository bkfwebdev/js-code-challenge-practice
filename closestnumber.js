function myFunction(target, values) {
  // find which number in `values` is closest to `target`. In the case of a tie, return the smaller number.
  let maxIndex = values.length;
  let distance = [];
  // get distances
  for (let index = 0; index < maxIndex; index++) {
    distance[index] = Math.abs(target - values[index]);
  }
  // compare distances
  let currentIndex = 0;
  for (let index = 1; index < maxindex; index++) {
    if (distance[currentIndex] < distance[index]) {
      currentIndex = index;
    }
  }
}
