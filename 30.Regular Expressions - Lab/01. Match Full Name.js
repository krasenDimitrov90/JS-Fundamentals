function twoNamesWithCapitalLetters(input) {
    let regExp = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g

    let resultNames = []
    let validName = null;
    while ((validName = regExp.exec(input)) !== null) {
        resultNames.push(validName[0]);
    }
    console.log(resultNames.join(' '));
}
twoNamesWithCapitalLetters("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")