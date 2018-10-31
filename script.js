var c1 = document.getElementById("color1");
var c2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var css = document.getElementById("codeSnip");

function changeGradient(){
	body.style.background = 
	"linear-gradient(to right,"
	+ c1.value
	+","
	+ c2.value
	+")";

	css.textContent = body.style.background + ";";
}

c1.addEventListener("input", changeGradient);
c2.addEventListener("input", changeGradient);

