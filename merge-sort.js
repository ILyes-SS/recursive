function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  } else {
    let left = [];
    let right = [];
    let j = Math.floor(arr.length / 2);
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      left[i] = arr[i];
      right[i] = arr[j];
      j++;
    }
    if (arr.length % 2 != 0) right.push(arr[j]);

    let numLeft = mergeSort(left);
    let numRight = mergeSort(right);

    let newArr = [];

    let i = 0;
    let k = 0;
    while (i < numLeft.length && k < numRight.length) {
      if (numLeft[i] < numRight[k]) {
        newArr.push(numLeft[i]);
        i++;
      } else {
        newArr.push(numRight[k]);
        k++;
      }
    }
    if (k >= numRight.length) {
      numLeft.slice(i).forEach((num) => newArr.push(num));
    } else if (i >= numLeft.length) {
      numRight.slice(k).forEach((num) => newArr.push(num));
    }
    return newArr;
  }
}
console.log(mergeSort([105, 79, 110, 99, 101, 80, 27, 0, 18, 29, 48, 13]));
//let's goooo
