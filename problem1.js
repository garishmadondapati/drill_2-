// 1. Store all country names in array.

let anotherDataSet = require("./data.js")

function countryNames(arr){
    let allcountryNames= arr.map((element)=>{
        return element.country
    })
    return allcountryNames
}
console.log(countryNames(anotherDataSet))

module.exports = countryNames