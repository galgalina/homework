var a = 30;
var b = 20;
var c = 30;

if(a > b) {
	if(a > c){
		if (c > b){
			alert(a * 1000);
			alert(c * 100);
		}else if(c < b){
			alert(b * 100);
		}else{
			console.log("Something went wrong");
		}
	}else if (a < c){
		if(c > b){
		alert(a * 100);
		alert(c * 1000);
		}else if(c < b){
			alert(c * 100);
		}else{
			console.log("Something went wrong");
		}
	}
}else if(a < b){
	if(b > c){
		if(a > c){
			alert(b * 1000);
			alert(a * 100);
		}else if (a < c) {
			alert(b * 1000);
			alert(c * 100);
		}else{
			console.log("Something went wrong");
		}
	}else if(b < c){
		alert(b * 100);
		alert(c * 1000);
	}else{
			console.log("Something went wrong");
		}
}else{
	console.log("Something went wrong");
}