function reverseString() {
  const inputString = prompt("Enter a string to reverse:");
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  document.getElementById(
    "result"
  ).innerHTML = `Reversed string: ${reversedString}`;
}

window.onload = () => {
  reverseString();
};
