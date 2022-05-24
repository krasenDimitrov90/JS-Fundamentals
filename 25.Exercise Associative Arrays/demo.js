function solve(params) {
    let list = {
        bulgaria: {
            sofia: 20,
            burgas: 30
        },
        albaniq: {
            georgi: 25,
            alfa:32
        },
        singapour :{
            terorist: 15,
            aspekt: 40
        }
    }
    let entries = Object.entries(list)
    let text = '';
    for (const el of entries) {
        text += el[0] + '\n';
        let sorted = Object.entries(el[1])
        sorted.sort((a,b) => a[1] - b[1])
        sorted.forEach(a => text += '||' + a[0] +' -> ' + a[1] + '\n')
    }
    console.log(text);
}
solve()