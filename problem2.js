// 2. Find the average population among all countries.

let anotherDataSet = require("./data.js")

function findAverage(arr){
    let averagePopulation = arr.reduce((acc,cv)=>{
           acc+=cv.population
           return acc
            
    },0)
    return averagePopulation/arr.length
}
console.log(findAverage(anotherDataSet))

module.exports=findAverage