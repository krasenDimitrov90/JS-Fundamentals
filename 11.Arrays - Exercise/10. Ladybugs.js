function solve(input) {
    let cleanArr = []
    let lengthOfArr = +input.shift()

    cleanArr = Array(lengthOfArr).fill(0);
    let cleanArrL = cleanArr.length;
    let modifyArr = cleanArr.slice(0);
    let indexOfBugs = input.shift().split(' ').map(Number)
    
    for (const el of indexOfBugs) {
        if (el < cleanArrL) {
            modifyArr.splice(el,1,1)
        }
    }
    for (const line of input) {
        let [index , word , move] = line.split(' ')
        index = +index;
        move = +move;
        
        if (word === 'right') {
            
        } else if (word === 'left') {
            
        }
    }
    
}
solve([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']
)