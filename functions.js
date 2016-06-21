//числа из первого массива делятся на num и переходят в новый массив,
//но полученный массив не удается вывести сразу целиком
function myFunction(arr, num){
	var arr1 = [];
	for (var i = 0; i < arr.length; i++) {
     if (arr[i] % num === 0) {
        arr1.push(arr[i]);
        console.log(arr1);
     }else{
     	console.log("Wrong number");
     }
 }
 return arr1;
}
var arr = [10, 4, 20, 45, 7, 12];
myFunction(arr, 5);




