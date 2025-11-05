function makeNegative(num) {
  // Code?
  if(num > 0){
    return -num;
  } else if (-num) {
    return num
  }
  else {
     return 0;
  }
}


// function makeNegative(num) {
//   return num <= 0 ? num: -num
// }


console.log(makeNegative(9))
console.log(makeNegative(1))
console.log(makeNegative(0))
console.log(makeNegative(0.12))
console.log(makeNegative(-0.12))