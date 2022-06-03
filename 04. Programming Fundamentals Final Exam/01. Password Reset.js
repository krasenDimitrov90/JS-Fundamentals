function passwordReset(input) {

    let password = input.shift();

    while (input[0] !== 'Done') {

        let tokens = input
            .shift()
            .split(' ');
        let command = tokens.shift();

        if (command === 'TakeOdd') {

            let result = takeOdd(password)
            password = result;
            console.log(password);

        } else if (command === 'Cut') {

            let [index, lengthToCut] = tokens.map(Number);
            password = password.slice(0 , index) + password.slice(index + lengthToCut);
            
            console.log(password);

        } else if (command === 'Substitute') {

            let [strToReplce, newStr] = tokens;

            if (password.includes(strToReplce)) {
                password = substitute(password , strToReplce, newStr)
                console.log(password);
            } else {
                console.log(`Nothing to replace!`);
            }

        }
    }

    console.log(`Your password is: ${password}`);

    function takeOdd(password) {

        let result = '';
        let passwordL = password.length;
        for (i = 0; i < passwordL; i++) {
            if (i % 2 !== 0) {
                result += password[i];
            }
        }
        return result;
    }

    function substitute(password, strToReplce, newStr) {

        while (password.includes(strToReplce)) {
            password = password.replace(strToReplce, newStr)
        }
        return password;
    }
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
