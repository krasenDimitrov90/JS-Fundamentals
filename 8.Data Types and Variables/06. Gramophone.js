function solve (band , album , song) {
    let totalTime = (band.length * album.length) * song.length / 2;
    let rotations = Math.ceil(totalTime / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);

}
solve('Black Sabbath', 'Paranoid', 'War Pigs')
solve('Rammstein', 'Sehnsucht', 'Engel')