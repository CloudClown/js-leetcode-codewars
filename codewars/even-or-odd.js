function evenOrOdd(number) {

  if(number % 2 === 0){
    return "Even"
  } else if (number % 2 !== 0) {
    return "Odd"
  }

}

console.log(evenOrOdd(3))
console.log(evenOrOdd(2))
console.log(evenOrOdd(1))


// function evenOrOdd(number) {
//   return number % 2 === 0 ? 'Even' : 'Odd';
// }