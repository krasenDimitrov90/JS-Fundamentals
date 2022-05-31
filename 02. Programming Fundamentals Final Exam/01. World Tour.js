function stringManipulating(input) {

    let stops = input.shift();

    while (input[0] !== "Travel") {
        let tokens = input
            .shift()
            .split(/\s|:/);
        let command = tokens.shift();
        if (command === 'Add') {

            let stopToAdd = tokens.pop();
            let index = +tokens.pop();
            stops = stops.slice(0,index) + stopToAdd + stops.slice(index);
            console.log(stops);
            
        } else if (command === 'Remove') {

            let endtIndex = +tokens.pop();
            let startIndex = +tokens.pop();
            let stopsL = stops.length;
            if (endtIndex < stopsL && startIndex > -1) {
                stops = stops.substring(0,startIndex) + stops.slice(endtIndex + 1)
            }
            console.log(stops);

        } else if (command === 'Switch') {

            let newStop = tokens.pop();
            let oldStop = tokens.pop(); 

            if (stops.includes(oldStop)) {

                stops = stops.replace(oldStop,newStop)
            }
            console.log(stops);
        }

    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}

stringManipulating((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)