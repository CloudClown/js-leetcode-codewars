function removeChar(str){
 //You got this!

  const strArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i]);
  }

  const newArr = [];

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


console.log(removeChar('eloquent'))