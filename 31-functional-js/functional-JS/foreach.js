// foreach :
// input : array, func
// console.log
function forEach(arr, func){
  for(let i =0; i< arr.length; i++){
    func(arr[i]);
  }
}

let print = (number) => {
  console.log(number)
}

arr = [1,2,3,4,5]
forEach(arr, print)

//map
//input: arr, func
//output: a new array and return
// takes the original array, some operation and the results are the
//return value of that. and return new array.
function map(arr, func){
  let mapped = []
  for(let i=0; i < arr.length; i++ ){
    mapped.push(func(arr[i]))
  }
  return mapped;
}

let square = (number) => { return number*number }

console.log(map(arr, square))

//filter ->
//input : arr, func (taking a look at values and just returns the ture values)
//output : create a new array and return that result
function filter(arr, func){
  let filtered = []
  for(let i=0; i < arr.length; i++){
    if(func(arr[i])){
      filtered.push(arr[i])
    }
  }
  return filtered;
}
let odd = (number) => { return !(number%2 === 0)}

console.log(filter(arr, odd))


//reduce : reduces to a single value (sum, avareage, boolean)
//input => arr, func, initial_value
//output => reduced value

function reduce(arr, func, intitial_value){
  accumulator = intitial_value
  for(let i =0; i< arr.length; i++){
    accumulator = func(arr[i], accumulator)
  }
  return accumulator
}

let sum = (number, total) => {
  return number+ total
}

let votes = (word, list) => {
  // console.log(`word : ${word} , list : ${list}`)
  if(!list[word]){
    list[word] = 0
  }
  list[word] += 1
  return list
}

console.log(reduce(arr, sum, 0))

let fruits = ["banana", "kumquat", "kumquat", "potato", "potato", "strawberry", "strawberry"]

console.log(reduce(fruits, votes , {}))
