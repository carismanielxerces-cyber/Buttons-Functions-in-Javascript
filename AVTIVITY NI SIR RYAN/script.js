
function showAlert() {
    alert("Hello! SHOUTOUT PARA I ALERT.");
    document.getElementById("result").textContent = "Alert was displayed.";
}

function showConfirm() {
    let answer = confirm("Do you like  ME?");

    if (answer) {
        document.getElementById("result").textContent = "You clicked OK.";
    } else {
        document.getElementById("result").textContent = "You clicked Cancel.";
    }
}

function showPrompt() {
    let name = prompt("What is your name?");

    if (name !== null && name.trim() !== "") {
        document.getElementById("result").textContent = "Hello, " + name + "!";
    } else {
        document.getElementById("result").textContent = "No name was entered.";
    }
}
