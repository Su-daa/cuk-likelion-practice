function operate() {
  let operator = document.getElementById("operator").value;
  let result_num = document.getElementById("result_num");
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (operator == "plus") {
    result_num.innerText = add(num1, num2);
  } else if (operator == "minus") {
    result_num.innerText = minus(num1, num2);
  } else if (operator == "times") {
    result_num.innerText = times(num1, num2);
  } else {
    result_num.innerText = divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}
function minus(num1, num2) {
  return num1 - num2;
}
function times(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
