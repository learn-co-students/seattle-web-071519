function reduce(arr, func, accumulatedVariable){
	let accumulated = accumulatedVariable
	for(let i =0; i < arr.length; i++){
		console.log(`accumulated : ${accumulated} , arr[i] : ${arr[i]}`)
		accumulated = func(arr[i], accumulated)
	}
	return accumulated;
}

let sum = (thisNum, total) =>  {
	return thisNum + total;
}

arr = [1,2,3,4]
console.log(reduce(arr, sum, 0))
