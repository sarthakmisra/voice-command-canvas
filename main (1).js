x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening jaldi bolo";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognised as:" + content;
    if(content == "circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_circle = "set";
    }
    if(content == "rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }
}
function draw() {
    if(draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is draw.";
        draw_circle = "";
    }
    if(draw_rect == "set") {
        radius = Math.floor(Math.random() * 100);
        rect(x,y,radius);
        document.getElementById("status").innerHTML = "Rectangle is draw.";
        draw_circle = "";
    }
}
