function chunk(array, size) {
    let newArray = [];
   for (let i=0; i<array.length; i+=size){
       newArray.push(array.slice(i, i+size))
    }
   return newArray;
}

console.log(chunk([1, 2, 3, 4, 5], 2));