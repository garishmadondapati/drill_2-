// 5. Console log the city names that has Bus transport facility.

let anotherDataSet= require('./data.js')

function cityNames(arr){
    let busTransportFacility=arr.filter((element)=>{
        if(element.publicTransport.includes('Bus')){
            return element.city
        }
    })
    .map(element=>element.city)
    return busTransportFacility
}

console.log(cityNames(anotherDataSet))

module.exports=cityNames