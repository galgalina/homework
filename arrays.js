
//создаем одномерный массив на 10 элементов, выводим его в консоль
var arr = [];
function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}
for (var i = 0; i < 10; i++) {
arr.push(randomInteger(1, 100));
}
console.log(arr);


//функция принимает размер будущего массива и возвращает этот массив (return resultArr)
function getArray(size){
	function randomInteger(min, max) {
 	return Math.floor( min + Math.random() * (max + 1 - min) );
	}
  var resultArr = [];
  for(var i=0; i<size; i++){
    resultArr[i] = randomInteger(1, 100);
   }
  return resultArr;
}
var myArr = getArray(10);
myArr;




//функция принимает аргумент size (один и для ширины, и для высоты массива) и возвращает двухмерный массив
function getArray(size){
	function randomInteger(min, max) {
 	return Math.floor( min + Math.random() * (max + 1 - min) );
	}
  var resultArr = [];
  for(var i=0; i < 2; i++){
    resultArr[i] = [];
    for(var n=0; n < size/2; n++){
      resultArr[i][n] = randomInteger(1, 100);
    }
  }
  return resultArr;
}
var myArr = getArray(10);
myArr;