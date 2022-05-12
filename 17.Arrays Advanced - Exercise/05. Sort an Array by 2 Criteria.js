function sortedByLengthAndSymbol(arr) {
  arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  console.log(arr.join("\n"));
}
sortedByLengthAndSymbol(["alpha", "beta", "gamma"]);
sortedByLengthAndSymbol(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
