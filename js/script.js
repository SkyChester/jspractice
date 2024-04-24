let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

function bigboss() {
  setUserName();
}

let bodyvar = document.querySelector("body");
let htmlvar = document.querySelector("html");
let text1 = document.getElementById("text");
let text2 = document.getElementById("text2");

function change() {
    htmlvar.style.backgroundColor = "crimson";
    text1.style.display = "none";
    bodyvar.style.backgroundColor = "white";
    myImage.setAttribute ('src','images/chrome.png');
    myHeading.style.color = "crimson";
    myHeading.innerText = "But Chrome..."
    text2.style.display = "block";
}