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


function appToastButton()
{
    var appToastButtonElement = document.createElement("button");
    var appToastButtonElementText = document.createTextNode("App Toast Notification");
    appToastButtonElement.appendChild(appToastButtonElementText);
    document.body.appendChild(appToastButtonElement).onclick = function fun()
    {
        var title = "The Time Is";
        var body = "test";
        var imagePath = "";
        showToastNotification(title, body, imagePath);

    }
}

function webToastButton()
{
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}