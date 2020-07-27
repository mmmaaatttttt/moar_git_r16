function add(x = 1, y = 0) {
  if (typeof x !== "number" || typeof y !== "number")
    throw new Error("Inputs must be numbers!");
  return x + y;
}

