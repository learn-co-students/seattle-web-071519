## SWBATS
- [ ] Asyn(), Await
- [ ] Demo and Async() with fetch.

## Steps
1. [ ] Go through Async and await and a demonstration
2. [ ] Introduce Promise.all(and how to use them inside of your program.)
3. [ ] Go through recursion slides
4. [ ] Reversing a string algorithm practice.
5. [ ] Implement finding the max number in an array of ints.
6. [ ] Introduce bonus challenges.


- reverse a string
"Hello"
olleh
-  "o" + "hell" => olleh
-       "l" + "hel" => lleh
          "l" + "he" => leh
            "e" + "h" => eh
              "H"
- Array excersice notes :
arr = [1, 2, 230, 6, 10, 13, 14]

//find maximum number
// 20

//recursive algorithm :
// - base case :
// when I have an array of 2 elements I return the largest one

// else
// find max of first-half
// find max of second-half

// return final max

function findMax(arr){
  if(arr.length < 2){
    let first = arr[0]
    let second = arr[arr.length-1]
    return first > second ? first : second
  }

  let midPoint = Math.floor(arr.length/2)
  let firstHalf = findMax(arr.slice(0, midPoint))

  let secondHalf = findMax(arr.slice(midPoint))

  return firstHalf > secondHalf ?firstHalf : secondHalf
}

findMax(arr)
