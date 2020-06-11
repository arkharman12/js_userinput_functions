/*

    N220 Section 25750
    Harmanjot Singh
    Password Protected
    12 March 2020

*/

// object to store the controls
const controls = {
    inputOne : null,
    inputTwo : null,
    button: null

}

function main() {
    document.body.innerHTML += "<h1>Password Protected</h1>";

    // input field 1
    controls.inputOne = document.createElement("input");
    controls.inputOne.style.fontSize = "14px";
    controls.inputOne.style.color = "black";
    controls.inputOne.style.width = "200px";
    controls.inputOne.style.height = "32px";
    controls.inputOne.setAttribute("placeholder", "First input");
    document.body.appendChild(controls.inputOne);

    // input field 2
    controls.inputTwo = document.createElement("input");
    controls.inputTwo.style.fontSize = "14px";
    controls.inputTwo.style.color = "black";
    controls.inputTwo.style.width = "200px";
    controls.inputTwo.style.height = "32px";
    controls.inputTwo.setAttribute("placeholder", "Second input");
    document.body.appendChild(controls.inputTwo);

    // button
    controls.button = document.createElement("button");
    controls.button.style.fontSize = "12px";
    controls.button.style.width = "100px";
    controls.button.style.height = "32px";
    controls.button.style.position = "absolute";
    controls.button.style.left = "420px";
    controls.button.style.top = "65px";
    controls.button.innerHTML = "Get In";
    controls.button.addEventListener("click", password);
    document.body.appendChild(controls.button);
}

// password method
function password() {
    if(controls.inputOne.value == "username" && controls.inputTwo.value == "Pa$$w0rd") {
        document.body.innerHTML += "<br> Access Granted!";
    } 
    else {
        document.body.innerHTML += "<br> Access Denied!";
    }
    
}