    // key
let registerList = {
     system1 : {
      // key
        comp1: ['b' , 'a'],
        comp2: ['o' , 'f' , 'b']
    },
     system2 : {
        comp1: ['t' , 'y'],
        comp2: ['b' , 'a' , 'n'],
        comp3: ['w' , 'z' , 'e']
    },
     system3 : {
        comp1: ['r' , 't'],
        comp2: ['c' , 'a' , 'g'],
        comp3: ['sub1' ]
    }
};

// let sortKeys = Object.keys(systems).forEach(el => {
//     let comps = Object.keys(systems[el])
//     console.log(comps);
//     comps.forEach(element => {
//         console.log(systems[el][element]);
//     });
// })

let sortedSystems = Object.keys(registerList).sort((sys1 , sys2) => {
    return (Object.keys(registerList[sys2]).length - Object.keys(registerList[sys1]).length ||
    sys1.localeCompare(sys2))
})

sortedSystems.forEach(sys => {
    console.log(sys);
    let sortedSubComps = Object.keys(registerList[sys]).sort((comp1 , comp2) => {
        return registerList[sys][comp2].length - registerList[sys][comp1].length
    })
    sortedSubComps.forEach(comp => {
        console.log(`|||${comp}`);
        let subComps = registerList[sys][comp]
        subComps.forEach(el => console.log(`||||||${el}`))

    })
})







