function destroyer(arr) {
    // console.log(arguments)
    const argumentsArray = [...arguments].slice(1)
    // [2,3]
    console.log(argumentsArray.slice(1), "<== sliced")
    console.log(argumentsArray, "argumentsArray")

    const filteredArray = [];
    for(let i=0; i<arr.length; i++){
      if (!argumentsArray.includes(arr[i])){
        filteredArray.push(arr[i])
      }
    }

    return filteredArray;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([1, 2, 3, 1, 2, 3],1, 2, 3));
  console.log(destroyer([1, 2, 3, 1, 2, 3],1, 2, 4));