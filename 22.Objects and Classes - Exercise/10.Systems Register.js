function systemRegister(input) {
    let registerList = {};
    for (const line of input) {
        let [system, component, subcomponent] = line.split(" | ");
        if (!registerList.hasOwnProperty(system)) {
            registerList[system] = {};
        }
        if (!registerList[system].hasOwnProperty(component)) {
            registerList[system][component] = [];
        }
        registerList[system][component].push(subcomponent);
    }


    let sortedSystems = Object.keys(registerList).sort((sys1, sys2) => {
        return (Object.keys(registerList[sys2]).length - Object.keys(registerList[sys1]).length ||
            sys1.localeCompare(sys2))
    })

    sortedSystems.forEach(sys => {
        console.log(sys);
        let sortedSubComps = Object.keys(registerList[sys]).sort((comp1, comp2) => {
            return registerList[sys][comp2].length - registerList[sys][comp1].length
        })
        sortedSubComps.forEach(comp => {
            console.log(`|||${comp}`);
            let subComps = registerList[sys][comp]
            subComps.forEach(el => console.log(`||||||${el}`))

        })
    })

}
systemRegister([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security",
]);
