
function hi(){
    alert('Hello world');
}

function changeText(){
 document.getElementById("tar").style.fontSize=24+"px";
}

function changeCheck(value){
    if(value.checked) {
        document.getElementById("tar").style.fontWeight = "bold";
    }
    else {
        document.getElementById("tar").style.fontWeight = "normal";
    }
}


