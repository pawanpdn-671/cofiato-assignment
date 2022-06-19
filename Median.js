function medianOfArr(arr1, arr2) {
   let mergedSortedArray = [...arr1, ...arr2].sort((a, b) => a - b);

   const midPoint = Math.floor(mergedSortedArray.length / 2);

   if (mergedSortedArray.length % 2 === 1) return mergedSortedArray[midPoint];

   return (mergedSortedArray[midPoint] + mergedSortedArray[midPoint - 1]) / 2;
}

