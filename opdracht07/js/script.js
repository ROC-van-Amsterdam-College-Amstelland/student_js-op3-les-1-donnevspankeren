var stop = "rood";
var maybe = "oranje";
var go = "groen";

var roodLichtStaatAan = false;
var oranjeLichtStaatAan = false;
var groenLichtStaatAan = false;

var lichtUit = "gray";
var lichtRood = "red";
var lichtOranje = "orange";
var lichtGroen = "green";

window.onload = function(){
    document.getElementById("left-light-top").innerHTML = stop;
    document.getElementById("left-light-middle").innerHTML = maybe;
    document.getElementById("left-light-bottom").innerHTML = go;

    document.getElementById("right-light-top").innerHTML = stop;
    document.getElementById("right-light-middle").innerHTML = maybe;
    document.getElementById("right-light-bottom").innerHTML = go;

    document.getElementById("left-stoplight-label").innerHTML = "A";
    document.getElementById("right-stoplight-label").innerHTML = "B";
}

function verkeerMagRijdenStoplichtB(booleanVerkeerMagRijden){
    if(booleanVerkeerMagRijden == true){
        document.getElementById("right-light-bottom").style.backgroundColor = lichtGroen;
        document.getElementById("right-light-top").style.backgroundColor = lichtUit;
    }
    else{
        document.getElementById("right-light-bottom").style.backgroundColor = lichtUit;
        document.getElementById("right-light-top").style.backgroundColor = lichtRood;
    }
}

function toggleRoodLicht(){
    if(roodLichtStaatAan == false){
        document.getElementById("left-light-top").style.backgroundColor = lichtRood;
        document.getElementById("right-light-top").style.backgroundColor = lichtUit;
        roodLichtStaatAan = true;
        //JOUW CODE HIER
        document.getElementById("right-light-bottom").style.backgroundColor = lichtGroen;
        document.getElementById("left-light-bottom").style.backgroundColor = lichtUit;
    }
    else{
        document.getElementById("right-light-top").style.backgroundColor = lichtRood;
        document.getElementById("left-light-top").style.backgroundColor = lichtUit;
        roodLichtStaatAan = false;
        //JOUW CODE HIER
        document.getElementById("left-light-bottom").style.backgroundColor = lichtGroen;
        document.getElementById("right-light-bottom").style.backgroundColor = lichtUit;

    }
}

function toggleOranjeLicht(){
    if(oranjeLichtStaatAan == false){
        document.getElementById("left-light-middle").style.backgroundColor = lichtOranje;
        oranjeLichtStaatAan = true;
        document.getElementById("right-light-middle").style.backgroundColor = lichtUit;
    }
    else{
        document.getElementById("left-light-middle").style.backgroundColor = lichtUit;
        oranjeLichtStaatAan = false;
        document.getElementById("right-light-middle").style.backgroundColor = lichtOranje
    }
}
