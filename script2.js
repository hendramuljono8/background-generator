/*In JavaScript, anonymous functions do not have a name and are often defined using a function expression. 
They are commonly used as callbacks, which are functions that are passed as arguments to other functions and are called later in the program. 
Anonymous functions can be called from within the function in which they are defined, but can also be passed around as arguments and called 
from other functions as well.*/

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

console.log(css);
console.log(color1);
console.log(color2);
console.log(body);

function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);