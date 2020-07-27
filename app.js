function add(x = 1, y = 0) {
  if (typeof x !== "number" || typeof y !== "number")
    throw new Error("Inputs must be numbers!");
  return x + y;
}

function sayHi() {
  return "Hello";
}

function person1Fn() {
  console.log("i'm person 1 building a feature");
  return [1, 2, 3];
}

function person2Fn() {
  console.log("hey this is a feature from person 2, isn't this great");
  return "!";
}
