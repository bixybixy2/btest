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

function webToastButton(nTitle, nBody, nIcon, nImage)
{
    var webToastButtonElement = document.createElement("button");
    var webToastButtonElementText = document.createTextNode("Web Toast Notification");
    webToastButtonElement.appendChild(webToastButtonElementText);
    document.body.appendChild(webToastButtonElement).onclick = function fun()
    {
        var options = {
            title: nTitle,
            body: nBody,
            icon: nIcon,
            image: nImage
        }
        var notification = new Notification(nTitle, options)
    }
}

var appCheck = window.matchMedia('(display-mode: standalone)').matches

function uniButton() {
if (appCheck == 1) {
    appToastButton()
    } else {
    webToastButton("Hello There!", "[Sample Body Text]","", "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350")
    }  
}