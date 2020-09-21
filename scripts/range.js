let range_line = document.getElementById("range")


function range_input() {
	let val = range_line.value
	range_line.style.background = '-webkit-linear-gradient(left ,#c29974 0%,#c29974 '+(val*100)/500+'%,#000000 '+(val*100)/500+'%, #000000 100%)';
 }
