// program to find the ASCII value of a character

let text;

var ended = false;

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.codePointAt(0);

text = `The ASCII value is: ${result}`;
document.getElementById("text").innerHTML = text;
var ended = true;

var delayandgameended = false;

setTimeout(function(){
    delayandgameended = true;
    document.getElementById("text").innerHTML = "";
    document.getElementById("maintext").innerHTML = "";
    document.getElementById("infotext").innerHTML = "";
    document.getElementById("br").hidden = true;
    document.getElementById("br1").hidden = true;
    document.getElementById("br2").hidden = true;
},3500); 
