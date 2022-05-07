function totalPrice(order, quantity) {
  let ifCoffee = () => quantity * 1.5;
  let ifWater = () => quantity * 1.0;
  let ifCoke = () => quantity * 1.4;
  let ifsnacks = () => quantity * 2.0;
  let totalPriceForOrders = 0;
  switch (order) {
    case "coffee":
        totalPriceForOrders = ifCoffee()
      break;
    case "water":
        totalPriceForOrders = ifWater()
      break;
    case "coke":
        totalPriceForOrders = ifCoke()
      break;
    case "snacks":
        totalPriceForOrders = ifsnacks()
      break;
  }
  console.log(totalPriceForOrders.toFixed(2));
}
totalPrice('water', 5 )
totalPrice('coffee', 2 )
