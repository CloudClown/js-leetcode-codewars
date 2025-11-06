function basicOp(operation, value1, value2) {
  //Code

  // let value = `${value1} ${operation} ${value1}`

  if (operation === '+') {
    let value = value1 + value2;
    return value
  } else if (operation === '-') {
    let value = value1 - value2;
    return value
  }
  else if (operation === '*') {
    let value = value1 * value2;
    return value
  }
  else if (operation === '/') {
    let value = value1 / value2;
    return value
  }

  return 0;
}


// function basicOp(o, a, b) {
//   return eval(a+o+b);
// }

// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+': return value1 + value2;
//         case '-': return value1 - value2;
//         case '*': return value1 * value2;
//         case '/': return value1 / value2;
//         default: return 'Operation must be one of + - * /';
//     }
// }



console.log(basicOp('+', 4, 7))