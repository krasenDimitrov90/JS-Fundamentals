function remont(input){
    let naylon = Number(input[0])
    let paint = Number (input[1])
    let paintTh = Number(input[2])
    let workers = Number(input[3])
    let bag = 0.40
    let naylonPr = 1.50
    let paintPr = 14.50
    let paintThPr = 5
    let naylonSum = (naylon + 2) * naylonPr
    let paintSum = (paint + paint *  0.1) * paintPr
    let paintThSum = paintTh * paintThPr
    let totalMats = naylonSum + paintSum + paintThSum + bag
    let totalCost = (totalMats * 0.3) * workers
    console.log(totalCost)
 
 
}
 
remont(['10','11','4','8'])