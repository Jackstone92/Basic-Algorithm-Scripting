// ====== Finders Keepers ======= //

// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).


function findElement(arr, func) {
  var placeHolder;

  for(var i=0; i<arr.length; i++){
    if(arr.filter(func)){
      placeHolder=arr.filter(func);
      return placeHolder[0];
    } else{
      return placeHolder;
    }
  }
  return placeHolder;
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
// 8 //
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; });
// undefined //
