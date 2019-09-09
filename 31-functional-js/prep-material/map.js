function map(arr, func) {
	let mapped = []
	for(let i = 0; i < arr.length; i++){
		result = func(arr[i]);
		mapped.push(result);
	}
	return mapped;
}

function square(x){
	return x*x;
}

arr = [1,2,4,5,6,7,7,19,20,11,12,14,15,16,17]
console.log(map(arr, square))
