function songsList(input) {
  let songsCount = +input.shift();
  let songsToPlay = input.pop();

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.songName = name;
      this.songTime = time;
    }
  }

  let songsPlaylist = [];
  let arrOfSongsL = input.length;
  for (let i = 0; i < arrOfSongsL; i++) {
    let [typeList, name, time] = input[i].split("_");
    songsPlaylist.push(new Song(typeList, name, time));
  }
  playSong(songsToPlay);
  function playSong(songsToPlay) {
    if (songsToPlay === "all") {
      songsPlaylist.forEach((song) => console.log(song.songName));
    } else {
      songsPlaylist.forEach((song) => {
        if (song.typeList === songsToPlay) {
          console.log(song.songName);
        }
      });
    }
  }
}
songsList([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
songsList([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
