function movieInfo(input) {
  
  
  let movieArr = [];
  for (let line of input) {
    if (line.includes("addMovie")) {
      let name = line.split("addMovie ").pop();
      movieArr.push({name});

    } else if (line.includes("directedBy")) {
      let [currentMovie, currentDirector] = line.split(" directedBy ");
      let movie = movieArr.find(x => x.name === currentMovie);
      if (movie) {
        movie.director = currentDirector;
      }

    } else if (line.includes("onDate")) {
      let [currentMovie, currentDate] = line.split(" onDate ");
      let movie = movieArr.find(x => x.name === currentMovie);
      if (movie) {
        movie.date = currentDate;
      }
    }
  }
  movieArr.forEach(movie => {
      if (movie.name && movie.director && movie.date) {
          console.log(JSON.stringify(movie));
      }
  })
}
movieInfo([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
