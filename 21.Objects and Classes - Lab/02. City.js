function printCityProperties(personObj) {
    let entries = Object.entries(personObj)
    
    for (const [keys , values] of entries) {
        console.log(`${keys} - ${values}`);
    }
}
printCityProperties({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
