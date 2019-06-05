function hi() {
    alert('Hello world');
}



function changeText() {

    area = document.getElementById('tar');

    var timer=setInterval(frame,500);
    var fontSizeValue=14;
    var fontSize;

    function frame() {
        if (fontSizeValue > 24) {
            clearInterval(timer);
        } else {
            fontSize = window.getComputedStyle(area, null).getPropertyValue("font-size");
            fontSizeValue=fontSizeValue+2;
            fontSize = parseInt(fontSizeValue) + "px"
            area.style.fontSize = fontSize;

            console.log('fontSize = = = ' + fontSize);
            console.log('else timer = = = ' + timer);
        }

    }

/*
    if (timer) {
        clearInterval(timer);
        console.log('if timer = = = '+timer);
    } else {
        timer = setInterval(function () {


        }, 500);
    }*/
    //   document.getElementById("tar").style.fontSize = 24 + "px";
}

function changeCheck(value) {
    if (value.checked) {
        document.getElementById("tar").style.fontWeight = "bold";
    } else {
        document.getElementById("tar").style.fontWeight = "normal";
    }
}


