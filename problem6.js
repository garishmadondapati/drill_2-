// 6. Write a function that should take foodItem as a param and return which city has that foodItem in their famousFood list.

let anotherDataSet= require('./data.js')


function foodItems(arr,item){
    let foodItemInCity=[]
    arr.forEach(element=>{
        if(element.famousFood.includes(item)){
            foodItemInCity.push(element.city)
        }
    })
    return foodItemInCity
}
console.log(foodItems(anotherDataSet,"Tacos"))

module.exports=foodItems