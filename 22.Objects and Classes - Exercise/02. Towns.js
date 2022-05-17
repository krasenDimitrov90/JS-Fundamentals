function townInfo(input) {
  for (const line of input) {
    let [name, latitude, longitude] = line.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    let currentTown = {
      town: name,
      latitude: latitude,
      longitude: longitude,
    };
    console.log(currentTown);
  }
}
townInfo(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
