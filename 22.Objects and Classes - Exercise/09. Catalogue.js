function catalogueList(input) {
  let productsList = {};
  for (const line of input) {
    let tokens = line.split(" : ");
    let currentProduct = tokens[0];
    let currentPrice = +tokens[1];
    let initial = currentProduct[0];
    if (!productsList.hasOwnProperty(initial)) {
      productsList[initial] = {};
    }
    productsList[initial][currentProduct] = currentPrice;
  }

  let sortedProductsList = Object.entries(productsList);
  sortedProductsList.sort((a, b) => a[0].localeCompare(b[0]));

  for (const initial of sortedProductsList) {
    console.log(initial[0]);
    let productEntries = Object.entries(initial[1]);
    productEntries.sort((a, b) => a[0].localeCompare(b[0]));
    for (const [key, value] of productEntries) {
      console.log(`  ${key}: ${value}`);
    }
  }
}
catalogueList([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
