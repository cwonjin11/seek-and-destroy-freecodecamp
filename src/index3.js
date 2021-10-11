function destroyer(arr) {
    const argumentsArray = [...arguments].slice(1)
    
    // const filteredArray = arr.filter(el => !argumentsArray.includes(el)) 
    // return filteredArray;

    //same as
    return  arr.filter(el => !argumentsArray.includes(el))

  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([1, 2, 3, 1, 2, 3],1, 2, 3));