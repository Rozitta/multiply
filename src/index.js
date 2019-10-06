module.exports = function multiply(first, second) {
 
  var aa = first.split("").reverse();
  var bb = second.split("").reverse();

  var stack = [];

  for (var i = 0; i < aa.length; i++) {
    for (var j = 0; j < bb.length; j++) {
      var m = aa[i] * bb[j]; //12

      if (stack[i + j] !== undefined) {
        stack[i + j] += m;
      } else {
        stack[i + j] = m;
      }
    }
  }

  // обрабатываем стек, чтобы там осталась одна цифра
  for (let i = 0; i < stack.length; i++) {
    var num = stack[i] % 10;
    var move = Math.floor(stack[i] / 10);
    stack[i] = num;

    // переносим высшие порядки вверх
    if (stack[i + 1] !== undefined) {
      stack[i + 1] += move;
    } else if (move != 0) {
      stack[i + 1] = move;
    }
  }
  return stack.reverse().join("");
  
  
}
