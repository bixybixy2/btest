function timeButton() 
{
var button1 = document.createElement("button");
var button1text = document.createTextNode("Show Time");
button1.appendChild(button1text);
document.body.appendChild(button1).onclick = function fun()
    {
        displayTime()
    };
}
function displayTime() 
{
    var date = new Date();
    var n = date.toDateString();
    var time = date.toLocaleTimeString();
    document.getElementById("timeSlot").innerHTML = time;
    document.getElementById("dateSlot").innerHTML = n;
    console.log('updated date to:', n);
    console.log('updated time to:',time);
}

function largeTextButton()
{
    var largeTextButtonElement = document.createElement("button");
    var largeTextButtonElementText = document.createTextNode("Large Font Size");
    largeTextButtonElement.appendChild(largeTextButtonElementText);
    document.body.appendChild(largeTextButtonElement).onclick = function fun()
    {
        document.getElementById("timeSlot").style.fontSize = "xx-large"
        document.getElementById("dateSlot").style.fontSize = "xx-large"
    }
}
function normalTextButton()
{
    var normalTextButtonElement = document.createElement("button");
    var normalTextButtonElementText = document.createTextNode("Normal Font Size");
    normalTextButtonElement.appendChild(normalTextButtonElementText);
    document.body.appendChild(normalTextButtonElement).onclick = function fun()
    {
        document.getElementById("timeSlot").style.fontSize = "medium"
        document.getElementById("dateSlot").style.fontSize = "medium"
    }
}

function smallTextButton()
{
    var smallTextButtonElement = document.createElement("button");
    var smallTextButtonElementText = document.createTextNode("Small Font Size");
    smallTextButtonElement.appendChild(smallTextButtonElementText);
    document.body.appendChild(smallTextButtonElement).onclick = function fun()
    {
        var title = "The Time Is";
        var body = "test";
        var imagePath = "";
        showToastNotification(title, body, imagePath);

    }
}

function toastTextButton()
{
    var toastTextButtonElement = document.createAttribute("button");
    var toastTextButtonElementText = document.createTextNode("Toast Time");
    toastTextButtonElement.appendChild(toastTextButtonElementText);
    document.body.appendChild(toastTextButtonElement).onclick = function fun()
    {
        document.getElementById("timeSlot").style.fontSize = "small"
        document.getElementById("dateSlot").style.fontSize = "small"
    }
}