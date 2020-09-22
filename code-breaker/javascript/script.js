var numberOne = null;
var numberTwo = null;
var numberThree = null;
var hiddenNumberOne = null;
var hiddenNumberTwo = null;
var hiddenNumberThree = null;
var numberOneDone = false;
var numberTwoDone = false;
var numberThreeDone = false;
var deathCounter = 12;
reset();

function reset() {
    hiddenNumberOne = Math.round(Math.random() * 8 + 1);
    hiddenNumberTwo = Math.round(Math.random() * 8 + 1);
    hiddenNumberThree = Math.round(Math.random() * 8 + 1);
    document.getElementById("numberOne").disabled = false;
    document.getElementById("numberTwo").disabled = false;
    document.getElementById("numberThree").disabled = false;
    document.getElementById("numberOne").style.backgroundColor = "white";
    document.getElementById("numberTwo").style.backgroundColor = "white";
    document.getElementById("numberThree").style.backgroundColor = "white";
    document.getElementById("numberOne").style.color = "black";
    document.getElementById("numberTwo").style.color = "black";
    document.getElementById("numberThree").style.color = "black";

    numberOneDone = false;
    numberTwoDone = false;
    numberThreeDone = false;
}

function checkIfCorrect() {
    numberOne = document.getElementById("numberOne").value;
    numberTwo = document.getElementById("numberTwo").value;
    numberThree = document.getElementById("numberThree").value;
    resetColor();
    if (hiddenNumberOne == numberOne) {
        document.getElementById("numberOne").style.backgroundColor = "greenyellow";
        document.getElementById("numberOne").disabled = true;
        numberOneDone = true;
    } else {
        document.getElementById("numberOne").style.backgroundColor = "red";
    }
    if (hiddenNumberTwo == numberTwo) {
        document.getElementById("numberTwo").style.backgroundColor = "greenyellow";
        document.getElementById("numberTwo").disabled = true;
        numberTwoDone = true;
    } else {
        document.getElementById("numberTwo").style.backgroundColor = "red";
    }
    if (hiddenNumberThree == numberThree) {
        document.getElementById("numberThree").style.backgroundColor = "greenyellow";
        document.getElementById("numberThree").disabled = true;
        numberThreeDone = true;
    } else {
        document.getElementById("numberThree").style.backgroundColor = "red";
    }
    checkIfNumbercontain();
    if (numberOneDone && numberTwoDone && numberThreeDone) {
        document.getElementById("main").style.backgroundImage = "url('../img/lock_open.png')"
        alert("You cracked the code! Congratulations! The Game will automatically restart!");
        location.reload();
    } else {
        deathCounter--;
        document.getElementById("counter").innerHTML = "Remaining tries: " + deathCounter;
    }
    if (deathCounter == 0) {
        alert("You lost the game! The Code would've been: " + hiddenNumberOne + hiddenNumberTwo + hiddenNumberThree + ". The Game will automatically restart!");
        location.reload();
    }
}

function checkIfNumbercontain() {
    if (numberOne == hiddenNumberTwo || numberOne == hiddenNumberThree) {
        document.getElementById("numberOne").style.color = "goldenrod";
    }
    if (numberTwo == hiddenNumberOne || numberTwo == hiddenNumberThree) {
        document.getElementById("numberTwo").style.color = "goldenrod";
    }
    if (numberThree == hiddenNumberOne || numberThree == hiddenNumberTwo) {
        document.getElementById("numberThree").style.color = "goldenrod";
    }
}

function resetColor() {
    document.getElementById("numberOne").style.color = "black";
    document.getElementById("numberTwo").style.color = "black";
    document.getElementById("numberThree").style.color = "black";
}