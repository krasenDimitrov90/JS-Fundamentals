function productList(arr) {
  let productArray = arr;
  let orderdArray = productArray.sort();
  let orderdArrayL = orderdArray.length;
  for (let i = 0; i < orderdArrayL; i++) {
    let product = orderdArray[i];
    console.log(`${i + 1}.${product}`);
  }
}
productList(["Potatoes", "Tomatoes", "Onions", "Apples"]);
productList(["Watermelon", "Banana", "Apples"]);
