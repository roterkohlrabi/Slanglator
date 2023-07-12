var slanglate = document.getElementById("slanglate");
var input = document.getElementById("input");
var rainbow = rainbow.getElementById("rainbow");

slanglate.onclick = function slangify(){
    var context = input.value
    alert(context);
    console.log("TEST")
    rainbow.style.color = randomColor();
}

function randomColor() {
    var s = '123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
        color = color + s[Math.floor(Math.random() * 10)]
    }

    return color;
}
