//First I want to talk about some diffrent programming 
//paradigms that you will come across in your developer life

//Object Oriented Programming
//Function Programming
//Logical Programming

//Depending on who you hear it from and when in time, there will be many different types of paradigms introduced. I would just be familiar with the idea that there are many different ways to introduce new concepts, but there will always be an underlying way someone has declared and proved through theories to code and how to make things more universal and efficient so these concepts can be carried through different courses and companies and projects.

//OO is something we have used already : Abstract, Encapsulate, Inheritance and Polymorphism.
//Functional Programming : JS allows us to pass methods as variables abstract away operations we want to do as a dataset.


//in order to show you one of the ways functional programming can be powerful, I am going to show you how you implement 4 main methods you have already been using and what functional programming looks in terms of that.
//For Each implementations
function forEach(arr, func) {
	for(let i =0; i < arr.length; i++){
		func(arr[i]);
	}
}

let sum = (number) => {
	console.log(number);
}

let arr = [1,2,3,4,5,6,10,11,12,13,14,20,29]
forEach(arr,sum);



//map implementation
//takes in an array and a function
//return a new array with an operation or calculation performed on that array.

function map(arr, func) {
	let mapped = []
	for(let i=0; i < arr.length; i++) {
		mapped.push(func(arr[i]));
	}
	return mapped;
}

let square = (number) => {
	return number * number;
}

let nums = [1,2,3,4,5,6,7];
console.log(map(nums,square));

//filter function 
//takes in an array
//returns the elements that match that condition

function filter(arr, func){
	let filtered = []
	for(let i =0; i < arr.length; i++){
		if(func(arr[i])){
			filtered.push(arr[i]);
		}
	}
	return filtered;
}

let odd = (number) => {
	return !(number%2 === 0)
}

arr = [1,2,3,4,5,6,67]
console.log(filter(arr,odd));


//reduce 
//takes in an array, and returns a single results, that's an accumulation of all the elements in an array based on a subject.

function reduce(arr, func, initialNumber) {
	accumulator = initialNumber
	for(let i =0; i < arr.length; i++){
		accumulator = func(arr[i], accumulator)
	}
	return accumulator;
}

arr = [1,2,3,4]
let reduceSum = (thisNum, total) => {
	return thisNum + total;
}

console.log(reduce(arr, reduceSum, 0))




//another example of reduce
//suppose we have a list of a count of fruits we want to vote for
arr = ["strawberry", "mango", "mango", "mango", "orange", "orange", "avacado", "avacado", "banana", "banana", "strawberry", "mango"]
let voteList = (item, objectList) => {
	if(! objectList[item] ){
		objectList[item] = 0
	}
	objectList[item]++
	return objectList
}

console.log(reduce(arr, voteList, {}))
