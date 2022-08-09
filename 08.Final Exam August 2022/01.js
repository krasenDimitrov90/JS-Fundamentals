function solve(input) {

    let str = input.shift();

    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens.shift();
        switch (command) {
            case 'Translate':
                let [char, replacement] = tokens;
                // str = translate(str,char,replacement);
                while (str.includes(char)) {
                    str = str.replace(char, replacement)
                }
                console.log(str);
                break;
            case 'Includes':
                let substring = tokens[0];
                includes(str, substring)
                break;
            case 'Start':
                let startString = tokens[0];
                startWithString(str, startString)
                break;
            case 'Lowercase':
                str = loweCase(str);
                break;
            case 'FindIndex':
                let charTofind = (tokens[0]);
                findIndex(str, charTofind)
                break;
            case 'Remove':
                let [start, count] = tokens.map(Number);
                remove(str, start, count)
                break;
        }
    }

    // function translate(str,char,replacement) {
    //     while (str.includes(char)) {
    //         str = str.replace(char,replacement)
    //     }
    //     // str = str.replaceAll(char,replacement);
    //     console.log(str);
    //     return str;
    // }

    function includes(str, substring) {
        if (str.includes(substring)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function startWithString(str, substring) {
        if (str.startsWith(substring)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    function loweCase(str) {
        str = str.toLowerCase();
        console.log(str);
        return str;
    }

    function findIndex(str, charTofind) {
        console.log(str.lastIndexOf(charTofind));
    }

    function remove(str, start, count) {
        str = str.slice(0, start) + str.slice(start + count);
        console.log(str);
    }
}

solve((["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
)