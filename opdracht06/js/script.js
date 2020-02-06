var stop = "rood";
var maybe = "oranje";
var go = "groen";

var roodLichtStaatAan = false;
var oranjeLichtStaatAan = false;
var groenLichtStaatAan = false;

window.onload = function(){
    document.getElementById("a-light-top").innerHTML = stop;
    document.getElementById("a-light-middle").innerHTML = maybe;
    document.getElementById("a-light-bottom").innerHTML = go;

    document.getElementById("b-light-top").innerHTML = stop;
    document.getElementById("b-light-middle").innerHTML = maybe;
    document.getElementById("b-light-bottom").innerHTML = go;

    //JOUW CODE HIER
}

function toggleRoodLicht(){
    if(roodLichtStaatAan == false){
        document.getElementById("a-light-top").style.backgroundColor = "red";
        roodLichtStaatAan = true;
    }
    else{
        document.getElementById("a-light-top").style.backgroundColor = "gray";
        roodLichtStaatAan = false;
    }
}

function toggleOranjeLicht(){
    if(oranjeLichtStaatAan == false){
        document.getElementById("a-light-middle").style.backgroundColor = "orange";
        oranjeLichtStaatAan = true;
    }
    else{
        document.getElementById("a-light-middle").style.backgroundColor = "gray";
        oranjeLichtStaatAan = false;
    }
}

function toggleGroenLicht(){
    if(groenLichtStaatAan == false){
        document.getElementById("a-light-bottom").style.backgroundColor = "green";
        groenLichtStaatAan = true;
    }
    else{
        document.getElementById("a-light-bottom").style.backgroundColor = "gray";
        groenLichtStaatAan = false;
    }
}
