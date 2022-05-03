function solve(input) {
    let index = 0;
    let userName = input[index]
    let userNameLength = userName.length
    let password = '';
    for (let i = userNameLength - 1; i >=0 ; i--) {
        password += userName[i]
    }

    index++;
    let counter = 0;
    let corectPassword = input[index];
    while (password != corectPassword) {
        
        index++;
        
        counter++;
        corectPassword = input[index];
        if (counter === 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }
        console.log('Incorrect password. Try again.');
        
    }
    console.log(`User ${userName} logged in.`);
}
solve (['Acer','login','go','let me in','recA'])
solve (['momo','omom'])
solve (['sunny','rainy','cloudy','sunny','not sunny'])