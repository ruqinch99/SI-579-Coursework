/*
 * Excercise 1
 *
 */
/*
 * Then write a function that changes the text and the color inside the div
 *
 */
var colorBlock = document.getElementById("color-block");
colorBlock.addEventListener("click", changeColor);
var click = 1;

function changeColor() {
	//Write a condition determine what color it should be changed to
	if (click !== 1) {
		//change the background color using JS
		colorBlock.style.background = "#F08080";
		//Change the text of the color using the span id color-name
		colorBlock.style.color = "black";
	} else {
		//change the background color using JS
		colorBlock.style.background = "#b84dff";
		//Change the text of the color using the span id color-name
		colorBlock.style.color = "white";
	}
	click = 1 - click
}
/*
 * For excercise 2, you need to write an event handler for the button id "convertbtn"
 * on mouse click. For best practice use addEventListener.
 *
 */
var btn = document.getElementById("convertbtn");
btn.addEventListener('click', convertTemp);
/*
 * Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
 *
 */
function convertTemp() {
	//Calculate the temperature here
	var Fahrenheit = document.getElementById("f-input").value;
	var Celsius = (Fahrenheit - 32) * 5 / 9;
	//Send the calculated temperature to HTML
	var cOut = document.getElementById("c-output");
	cOut.innerHTML = Celsius;
}