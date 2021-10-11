

//arguments key word is not acceptable when using arrow function


const destroyers = (...args) => args[0].filter(el => !args.slice(1).includes(el));
  
  console.log(destroyers([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyers([1, 2, 3, 1, 2, 3],1, 2, 3));