function isFibonacci(number) {
 
  let first = 0;
  let second = 1;
  let temp;

  if (number === first || number === second) return true;

  while (second < number) {
    temp = first + second;
    first = second;
    second = temp;
  }

  return second === number;
}

const number = Number.parseInt(prompt("Enter a number to check if it belongs to the Fibonacci sequence:"));

if (isFibonacci(number)) {
  alert(`${number} belongs to the Fibonacci sequence.`);
} else {
  alert(`${number} does not belong to the Fibonacci sequence.`);
}
