function hi() {
    alert('Hello world');
}

var timer;


function changeText() {
    area = document.getElementById('tar');
    if (timer) {
        clearInterval(timer);
        timer = null;

    } else {
        timer = setInterval(function () {
            var fontSize = window.getComputedStyle(area, null).getPropertyValue("font-size");
            fontSize = parseInt(fontSize) + 2 + "px"
            area.style.fontSize = fontSize;
        }, 500);
    }
    //   document.getElementById("tar").style.fontSize = 24 + "px";
}

function changeCheck(value) {
    if (value.checked) {
        document.getElementById("tar").style.fontWeight = "bold";
    } else {
        document.getElementById("tar").style.fontWeight = "normal";
    }
}


