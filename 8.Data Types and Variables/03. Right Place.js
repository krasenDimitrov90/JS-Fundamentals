function solve(str , char , result) {
    let newString = str.replace('_',char);
    let output = newString === result? 
        "Matched":
        "Not Matched";
    console.log(output);
}
solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')