// 3. Find which country has more population among all?

let anotherDataSet= require('./data.js')

function findMorePopulation(arr){
    let morePopulation =""
    let population =0
    arr.forEach((element)=>{
        if(element.population>population){
            morePopulation=element.country
            population = element.population
        }
    
    })
     return morePopulation
}      

console.log(findMorePopulation(anotherDataSet))

module.exports=findMorePopulation