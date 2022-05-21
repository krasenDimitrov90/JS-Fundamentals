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
  for (const system in registerList) {
      let componentEntries = Object.entries(registerList[system])
      componentEntries.sort((a,b) => b[1].length - a[1].length)
      //componentEntries.forEach(a => console.log(a[1]))
      
  }

//   let systemEntries = Object.entries(registerList)
//   systemEntries.sort((a,b) => b[0].localeCompare(a[0]))
//   systemEntries.forEach(a => console.log(a))

let systemValues = Object.entries(Object.values(registerList))
//let systemEntries = Object.entries(systemValues)
systemValues.forEach(a => console.log(a[1]))
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
