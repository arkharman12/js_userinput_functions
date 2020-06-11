/*

    N220 Section 25750
    Harmanjot Singh
    Tip Calculator
    12 March 2020

*/

// object to store the controls
const controls = {
    input : null,
    button: null

}

function main() {
    document.body.innerHTML += "<h1>Tip Calculator</h1>";

    // input field
    controls.input = document.createElement("input");
    controls.input.style.fontSize = "14px";
    controls.input.style.color = "black";
    controls.input.style.width = "200px";
    controls.input.style.height = "32px";
    controls.input.setAttribute("placeholder", "Total due in $");
    document.body.appendChild(controls.input);

    // button
    controls.button = document.createElement("button");
    controls.button.style.fontSize = "12px";
    controls.button.style.width = "100px";
    controls.button.style.height = "32px";
    controls.button.style.position = "absolute";
    controls.button.style.left = "220px";
    controls.button.style.top = "65px";
    controls.button.innerHTML = "Calculate";
    controls.button.addEventListener("click", calculator);
    document.body.appendChild(controls.button);
}

// calculator method
function calculator() {
    let tip = parseInt(controls.input.value * .10);

    if(controls.input.value.trim() == "" || controls.input.value == null) {
        document.body.innerHTML += "<br> Oops! Enter a Amount. Refresh and Try Again!";
    } 
    else {
        document.body.innerHTML += "<br><br>Tip: $" + tip;
        document.body.innerHTML += "<br><br>Total: $" + (parseInt(controls.input.value) + tip);
    }
    
}