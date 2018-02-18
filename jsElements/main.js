// Long version of code

var arr1 = [52,120,135];
console.log(arr1);

var arr2 = [];

for (i = 0; i < arr1.length; i++) {

  arr2.push(arr1[i] * 10);

}

console.log(arr2);

//Refactored code uing functional programming approach

function mapForEach(arr,fn) {

  var newArr = [];
  for (i=0; i < arr.length; i++) {

    newArr.push(fn(arr[i])
  )


};

return newArr;

}

//Multiply and return the new value of each item in the array by 100

var arr3 = mapForEach(arr1, function(item) {

  return item * 100;

});

console.log(arr3);

//Check if each item in the array is larger than 100

var arr4 = mapForEach(arr1, function(item) {

  return item > 100;

});

console.log(arr4);

//Check if each item in th array is larger than a threshold value
var CheckThreshold = function(threshold, item) {

  return item > threshold;

}

var arr5 = mapForEach(arr1, CheckThreshold.bind(this,100));
console.log(arr5);
