let buttons = document.querySelectorAll(".but");
let reklam = document.querySelector(".govazd_p");
let nkar = [document.querySelector(".n1"), 
document.querySelector(".n2"),
document.querySelector(".n3"),
document.querySelector(".n4"),
document.querySelector(".n5")
];
function fun1(){
	buttons[0].style.backgroundColor = "#FECE47";
	buttons[1].style.backgroundColor = "#bbb"
	buttons[2].style.backgroundColor = "#bbb"
}
function fun2(){
	buttons[1].style.backgroundColor = "#FECE47";
	buttons[0].style.backgroundColor = "#bbb"
	buttons[2].style.backgroundColor = "#bbb"
}
function fun3(){
	buttons[2].style.backgroundColor = "#FECE47";
	buttons[0].style.backgroundColor = "#bbb"
	buttons[1].style.backgroundColor = "#bbb"
}
function govazd(){
	reklam.style.display = "flex";
}
function loop_left(){
	let a = nkar[0].src;
	for(let i = 0 ; i < nkar.length ; i++){
		if (i === 4){
			nkar[i].src = a;
		}
		else{
			nkar[i].src = nkar[i + 1].src;
		}
	}
}
function loop_right(){
	let k = nkar[4].src;
	for(let i = nkar.length - 1 ; i >= 0 ; i--){
		if (i === 0){
			nkar[i].src = k;
		}
		else{
			nkar[i].src = nkar[i - 1].src;
		}
	}
}
