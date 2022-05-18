function townInfo(input) {
    class Town{
        constructor (name,latitude,longitude) {
            this.town = name;
            this.latitude = latitude;
            this.longitude = longitude
        }
    }
    let townsArr = [];
  for (const line of input) {
    let [name, latitude, longitude] = line.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    townsArr.push(new Town(name,latitude,longitude))
    // let currentTown = {
    //   town: name,
    //   latitude: latitude,
    //   longitude: longitude,
    // };
    // console.log(currentTown);
  }
  townsArr.forEach(town => console.log(JSON.parse(JSON.stringify(town))))
}
townInfo(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
