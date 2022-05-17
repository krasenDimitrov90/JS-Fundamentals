function convertObjectToJSON(name, lastName, hairColor) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };
    
    console.log(JSON.stringify(person));
}
convertObjectToJSON('George', 'Jones', 'Brown')
