function mergeSortedArray (arr1, arr2) {
   const combined = [...arr1, ...arr2]
   const merged = arr1.concat(arr2).sort()

  
   return merged;
}

console.log(mergeSortedArray([2,5,6,9], [1,2,3,29,65]))

