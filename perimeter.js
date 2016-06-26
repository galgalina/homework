//вернуть периметр массива ПРОТИВ часовой стрелки
function createTwoDimensionalArray(size) {
  function randomInteger(min, max) {
 	return Math.floor( min + Math.random() * (max + 1 - min) );
	}
  var result = [];

  for (var i = 0; i < size; i++) {
    var innerArr = [];
    for (var j = 0; j < size; j++) {
      innerArr.push( randomInteger(1, 100) );
    }
    result.push(innerArr);
  }

  return result;
}
var arr = createTwoDimensionalArray(5);
console.table(arr);

function perimeterRectangle(arr){
	var result = [];

		var left = [];
			for(var i = 0; i < arr.length-1; i++){
				left.push(arr[i][0]);
			}


		var bottom = arr[arr.length-1].slice();
		var top = [];
			for(var i = arr[0].length-1; i >= 1; i--){
				top.push(arr[0][i]);
			}

		var right = [];
			for(var i = arr.length-2; i >= 1; i--){
				right.push(arr[i][arr[i].length-1]);
			}

		result = left.concat(bottom, right, top);

		return result;
}

var r = perimeterRectangle(arr);
console.log('perimeter', r);




//Обойти массив по верхней грани, правой грани и главной диагонали (по часовой стрелке)
function createTwoDimensionalArray(size) {
  function randomInteger(min, max) {
 	return Math.floor( min + Math.random() * (max + 1 - min) );
	}
  var result = [];

  for (var i = 0; i < size; i++) {
    var innerArr = [];
    for (var j = 0; j < size; j++) {
      innerArr.push( randomInteger(1, 100) );
    }
    result.push(innerArr);
  }

  return result;
}
var arr = createTwoDimensionalArray(5);
console.table(arr);

function perimeterTriangle(arr){
	var result = [];

		var top = arr[0].slice();
		var right = [];
			for(var i = 1; i < arr.length-1; i++){
				right.push(arr[i][arr[i].length-1]);
			}

		var diagonal = [];
			for (var i = 1; i < arr.length; i++) {
	    	diagonal.push(arr[i][i]);
	    	/*альтернативный вариант
	    	for (i = 1; i < arr.length; i++) {
	    		for (j = 0; j < arr.length; j++) {
	      			if(i == j){
	      				diagonal.push(arr[i][j]);
	      			}
	      		}
	     	}*/
	    	}
		result = top.concat(right, diagonal.reverse());
		return result;
}

var r = perimeterTriangle(arr);
console.log('perimeter', r);




//ДЗ4 === ДЗ3 (только диагональ - побочная)
function createTwoDimensionalArray(size) {
  function randomInteger(min, max) {
 	return Math.floor( min + Math.random() * (max + 1 - min) );
	}
  var result = [];

  for (var i = 0; i < size; i++) {
    var innerArr = [];
    for (var j = 0; j < size; j++) {
      innerArr.push( randomInteger(1, 100) );
    }
    result.push(innerArr);
  }

  return result;
}
var arr = createTwoDimensionalArray(5);
console.table(arr);

function perimeterReverseTriangle(arr){
	var result = [];

		var top = [];
			for(var i = arr[0].length-2; i >= 1; i--){
				top.push(arr[0][i]);
			};
		var left = [];
			for(var i = 0; i < arr.length-1; i++){
				left.push(arr[i][0]);
			}

		var diagonal = [];
			for (var i = 0; i < arr.length; i++) {
	    	diagonal.push(arr[i][arr.length-1-i]);
			}

		result = left.concat(diagonal.reverse(), top);

		return result;
}

var r = perimeterReverseTriangle(arr);
console.log('perimeter', r);
