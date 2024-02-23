// 4. Store all attractions in an array

let anotherDataSet= require('./data.js')

function storeAllAttractions(arr){
    let allAttractions=arr.map((element)=>{
        return element.attractions
    })
    return allAttractions
}

console.log(storeAllAttractions(anotherDataSet))

module.exports = storeAllAttractions