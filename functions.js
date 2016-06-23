//числа из первого массива делятся на num и переходят в новый массив,
function aliquot(arr, num){
	var arr1 = [];
	for (var i = 0; i < arr.length; i++) {
     if (arr[i] % num === 0) {
        arr1.push(arr[i]);
    }else{
     	console.log("Wrong number");
     }
 }
 console.log(arr1);
 return arr1;
}
var arr = [20, 15, 5, 17, 29, 30, 8, 7];
aliquot(arr, 2);



//считаем количество отрицательных чисел в массиве
function count(arr){
	var c = 0;
	for (var i = 0; i < arr.length; i++) {
     if (arr[i] < 0) {
        c++;
    }
 }
 return c;
}
var arr = [20, 15, -5, 17, -29, 30, -8, 7];
count(arr);


//случайно выводит значение из данного массива
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
var rand = Math.floor(Math.random() * arr.length);
alert( arr[rand] );



//калькулятор для введенных значений
var numbers = [];
while (true) {
  var value = prompt("Введите число", 0);
  if (value === "" || value === null || isNaN(value)) break;
  numbers.push(+value);
}
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
alert( sum );




//функция принимает аргумент size (один и для ширины и для высоты массива) и возвращает двухмерный массив

//function getArray(size){
var size = 10
var array1 = [];
var array2 = [];
/*var array = new Array(2);
array[0] = array1;
array[1] = array2;*/
function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}
for (var i = 0; i < size; i++) {
array1.push(randomInteger(1, 100));
}
for (var i = 0; i < size; i++) {
array2.push(randomInteger(1, 100));
}

//array.push(array1, array2);
//}
//getArray(15);
console.log(array);
console.log(array1);
console.log(array2);


/*function matrixArray(rows,columns){
  var arr = [];
  for(var i=0; i<columns; i++){
    arr[i] = [];
    for(var j=0; j<rows; j++){
      arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}
var myMatrix = matrixArray(3,3);*/

function matrixArray(size){
	function randomInteger(min, max) {
 	return Math.floor( min + Math.random() * (max + 1 - min) );
	}
  var arr = [];
  for(var i=0; i<size; i++){
    arr[i] = [];
    for(var j=0; j<size; j++){
      arr[i][j] = randomInteger(1, 100)+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
    }
  }
  return arr;
}
var myMatrix = matrixArray(2);