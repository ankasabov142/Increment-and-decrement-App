function increment() {
  let button = document.getElementById("increment");
  let spanElement = document.getElementById("value");
  let value = spanElement.innerText;
  let incrementedNumber = Number(value) + 1;
  spanElement.innerText = incrementedNumber;
}

function decrement() {
  let button = document.getElementById("decrement");
  let spanElement = document.getElementById("value");
  let value = spanElement.innerText;
  let decrementedNumber = Number(value) - 1;
  spanElement.innerText = decrementedNumber;
}
