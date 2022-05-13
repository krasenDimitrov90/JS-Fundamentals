function solve(params) {
    let arr = [1,2,3,4,5]
    let arr2 = [1,2,3]
    let arrAsNums = (arr2.join(' '));
    arr.splice(2,0,arrAsNums)
    console.log(arr);
}
solve()

