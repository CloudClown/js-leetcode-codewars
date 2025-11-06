function countSheeps(sheep) {
  // TODO
  let total = 0;
  let nai = []

  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      total += 1;
      // console.log(sheep[i])
      // console.log(total)
    }
  }

  return total;

}

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

console.log(countSheeps([true, true, true, false, null,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]))