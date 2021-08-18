var vv = document.getElementById("vastustajanvalinta");
var v = document.getElementById("valintasi");
var p = document.getElementById("omatpisteet");
var vp = document.getElementById("vastustajanpisteet");
var tulos = document.getElementById("tulos");

var pisteet = 0;
var vpisteet = 0;

function valinta(a) {
    // Arpoo tietokoneen valinnan
    const ksp = ["Kivi", "Sakset", "Paperi"];
    const random = Math.floor(Math.random() * ksp.length);
    // console.log(random, ksp[random]);

    switch(a) {
        case kivi:
            v.innerHTML = "Kivi";
            break;
        case sakset:
            v.innerHTML = "Sakset";
            break;
        case paperi:
            v.innerHTML = "Paperi";
            break;
    }

    vv.innerHTML = ksp[random];
    if (a === kivi && random === 1) {
        pisteet++;
        p.textContent = pisteet.toString();
        tulos.innerHTML = "Voitit!";
    } else if (a === sakset && random === 2) {
        pisteet++;
        p.textContent = pisteet.toString();
        tulos.innerHTML = "Voitit!";
    } else if (a === paperi && random === 0) {
        pisteet++;
        p.textContent = pisteet.toString();
        tulos.innerHTML = "Voitit!";
    } else if (a === kivi && random === 2) {
        vpisteet++;
        vp.textContent = vpisteet.toString();
        tulos.innerHTML = "Hävisit!";
    } else if (a === sakset && random === 0) {
        vpisteet++;
        vp.textContent = vpisteet.toString();
        tulos.innerHTML = "Hävisit!";
    } else if (a === paperi && random === 1) {
        vpisteet++;
        vp.textContent = vpisteet.toString();
        tulos.innerHTML = "Hävisit!";
    } else {
        tulos.innerHTML = "Tasapeli!";

    }
};