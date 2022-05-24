function destinationsPrice(input) {
    let countries = {};
    for (const line of input) {
        let [country , city , price] = line.split(' > ')
        price = +price;
        
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
        }
        if (!countries[country].hasOwnProperty(city)) {
            countries[country][city] = price
        }
        let lowestPrice = countries[country][city]
        if (price < lowestPrice) {
            countries[country][city] = price;
        }
    }
    let countriesSorted = Object.entries(countries)
    countriesSorted.sort((a , b) => a[0].localeCompare(b[0]));
    let result = '';
    for (const country of countriesSorted) {
        result += country[0] + ' -> ';
        let sortedCities = Object.entries(country[1]);
        sortedCities.sort((a,b) => a[1] - b[1])
        sortedCities.forEach(a => result += a[0] + ' -> ' + a[1] + ' ')
        result += '\n'
        
    }
    console.log(result);
}
destinationsPrice([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )