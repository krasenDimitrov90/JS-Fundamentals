function solve(params) {
    let obj = {
        system : {
            system1: [1,2,3],
            component2: [12,2,3,4],
            component3: [5,4,7,8,7]
        },
        CPU : {
            CPU1: [1,2,3],
            component2: [12,2,3,4],
            component3: [5,4,7]
        },
        RAM : {
            RAM1: [1,2,3]
        }
    }
    
    let sorted = Object.entries(obj);
    sorted.sort((a,b) => {
        let lengthA = Object.keys(a[1]).length
        let lengthB = Object.keys(b[1]).length
        return lengthB - lengthA || a[0].localeCompare(b[0])
    })
    //sorted.forEach(a => console.log(a[1]))
    sorted.forEach(a => {
        console.log(a[0]);
        let entries = Object.keys(a[1]);
        console.log(entries);
        let values = Object.values(a[1])
        let result = values.forEach(a => {
        let values = Object.values(a);
        values.sort((a,b) => b.length - a.length)
        })
        values.forEach(a => console.log(a))
    })
    // let values = Object.values(obj)
    // let result = values.forEach(a => {
    //     let values = Object.values(a);
    //     values.sort((a,b) => b.length - a.length)
    // })
}
solve()