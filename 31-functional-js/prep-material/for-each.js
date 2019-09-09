function forEach(arr, func) {
	for(let i =0; i < arr.length; i++){
		func(arr[i]);;
	}
}

function print(element) {
	console.log(element);
}

arr = [1,2,4,4,5,10,347,47,50];
forEach(arr,print);
