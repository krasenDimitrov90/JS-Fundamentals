function calculate(num1, num2, operand) {
  let result = parameters(num1, num2, operand);
  console.log(result);

  function parameters(x, y, oprnd) {
    switch (oprnd) {
      case "add":
        return x + y; 
      case "subtract":
        return x - y; 
      case "multiply":
        return x * y; 
      case "divide":
        return x / y; 
    }
  }
}
calculate(5, 4, "multiply");
