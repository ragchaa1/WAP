(function () {
    var timeId;
    var prvVal;
    var stop;
    var NORMALSPEED = 250;
    var TURBOSPEED = 50;
    var timeInterval = NORMALSPEED;
    var text;
    var idx;

    function changeContent() {
        document.getElementById('tarea').value = text[idx];
        idx = (idx + 1) % text.length;
        if (!stop) setTimeout(changeContent, timeInterval);
    };

    function disableInputs(truth) {
        document.getElementById('start').disabled = truth;
        document.getElementById('stop').disabled = !truth;
        document.getElementById('animation').disabled = truth;
        document.getElementById('tarea').readOnly = truth;
    };

    function startClick() {
        prvVal = document.getElementById('tarea').value;
        text = prvVal.split("=====\n");
        idx = 0;
        stop = false;
        setTimeout(changeContent, timeInterval);
        disableInputs(true);
    };

    function stopClick() {
        stop = true;
        setTimeout(function () {
            document.getElementById('tarea').value = prvVal;
        }, timeInterval);
        disableInputs(false);
    };

    function animationChange() {
        animType = document.getElementById('animation').value;
        document.getElementById('tarea').value = ANIMATIONS[animType];
    }

    function speedChange() {
        if (document.getElementById('speed').checked) {
            timeInterval = TURBOSPEED;
        } else timeInterval = NORMALSPEED;
    }

    function sizeChange() {
        document.getElementById('tarea').style.fontSize = document.getElementById('size').value;
    }

    window.onload = function () {
        document.getElementById('start').onclick = startClick;
        document.getElementById('stop').onclick = stopClick;
        document.getElementById('animation').onchange = animationChange;
        document.getElementById('speed').onchange = speedChange;
        document.getElementById('size').onchange = sizeChange;
    };
})();