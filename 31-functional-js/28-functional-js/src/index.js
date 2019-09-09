
let runSomething = (callback)=> {

    console.log(callback())
}

runSomething(()=> "Hello, World!")

let closureExample = () => {
    let total = 10

   return function addToTotal(num){
        return total + num 
   }
}

let addToThree = closureExample()

// console.log("this is the addToThree value: ", addToThree)

// console.log(addToThree(3))

let counter = 0 

function add(num1, num2){
    return num1 + num2
}

function impureAdd(num1, num2){
    return ++counter + num1 + num2 
}

console.log(impureAdd(3,4))

console.log(add(7,8))


let donut = {
    "topping": "bacon",
    "filling": "salted caramel"
}

//impure 
let customizeDonut= (property, value)=>{
    donut[property] = value
}

//pure function
let pureCustomizeDonut=(property, value)=>{

    let newDonut = Object.assign({[property]:value}, donut)
    let newDonut = {...donut, [property]:value, "topping": "cherries"}
    return newDonut
    //create a new donut out of existing donut
    //add new property to new donut
}

let array = [1,2,3]

array.forEach(function(element) {console.log(element)})

function forEach(array, callback){

    for (let i =0; i < array.length; i++){
        callback(array[i])
    }

}














