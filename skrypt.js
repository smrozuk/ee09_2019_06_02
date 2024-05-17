const r = document.querySelector("#rodzaj");
const l = document.querySelector("#litr");
const tresc = document.querySelector("#wynik");
const rodzaj = r.value;
const litr = l.value;
let wynik;

function oblicz(){
    if(r.value == 1){
        wynik = l.value * 4;
    }
    else if(r.value == 2){
        wynik = l.value * 3,5;
    }
    else{
        wynik = 0;
    }
    tresc.innerHTML = wynik;
}