var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false);
// Add your code below!
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);

window.onload = function() {
	document.getElementById("xhrStatus").innerHTML = xhr.status;
	document.getElementById("xhrStatusText").innerHTML = xhr.statusText;	
}