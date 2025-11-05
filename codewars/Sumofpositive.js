function positiveSum(arr) {

  sumOfArr = []
  totalSum = 0

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sumOfArr.push(arr[i])
      // console.log(sumOfArr)
    }
  }

  for(let i = 0; i < sumOfArr.length; i++){
    totalSum = sumOfArr[i] + totalSum
  }

  return totalSum;

}

// function positiveSum(arr) {
//   var total = 0;
//   for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//     if (arr[i] > 0) {                   // if arr[i] is greater than zero
//       total += arr[i];                  // add arr[i] to total
//     }
//   }
//   return total;                         // return total
// }

console.log(positiveSum([1, -4, 7, 12]))