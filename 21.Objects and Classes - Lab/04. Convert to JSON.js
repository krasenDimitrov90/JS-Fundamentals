function convertObjectToJSON(firstName, lastName, hairColor) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        hairColor: hairColor
    };
    
    console.log(JSON.stringify(person));
}
convertObjectToJSON('George', 'Jones', 'Brown')