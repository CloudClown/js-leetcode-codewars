function removeChar(str){
 //You got this!

  const strArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i]);
  }

  const newArr = [];

  // here we poping the element with the help of if condition
  // the initial and the last index will be pop because of the condition
  for (let x = 0; x < strArr.length; x++) {
    if (x !== 0 && x !== strArr.length - 1) {
      newArr.push(strArr[x]);
    }
  }

  let result = '';
  for (let y = 0; y < newArr.length; y++) {
    result += newArr[y];
  }

  return result;

};

// function removeChar(str) {
//   return str.slice(1, -1);
// }


console.log(removeChar('xyz'))

// first and last string pop with the help of loop and condition