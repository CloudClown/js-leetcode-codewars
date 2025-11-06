// function squareSum(numbers){
//   let totalCount = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     let newSq = numbers[i] ** 2
//     totalCount = totalCount + newSq
//   }

//   return totalCount
// }

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

console.log(squareSum([1, 2, 2]))