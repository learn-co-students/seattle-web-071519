function printName(){
  return "Soundarya"
}

// console.log(printName())

let functionTwo = function(){
  return "Soundarya from function Two"
}

// console.log(functionTwo())
// console.log(functionTwo)

function subtract(x,y){
  return x-y
}

function add(x,y){
  return x+y
}

function multiply(x,y){
  return x*y
}

function calculator(x,y, operation){
  operation(x,y)
}

calculator(5,6, subtract)
calculator(5,6, add)
calculator(5,6, multiply)
