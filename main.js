import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const GALERIA = document.querySelector(".galeria")
console.log(GALERIA)


/* írd bele az összeálíltott html képsorozatot */
GALERIA.innerHTML += htmlOsszeAllit(KEPEK)


/*2. feladat  A .nagykep divben lévő img elem megfogása */

/* A .nagykep div megfogása */
const NAGYKEP = document.querySelector(".nagykep img")


/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */

const KISKEPEK = document.querySelectorAll(".kep img")

/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
for (let index = 0; index < KISKEPEK.length; index++) {
    KISKEPEK[index].addEventListener("click", katt)
    function katt() {
        aktndex = index
        NAGYKEP.src = KISKEPEK[index].src
    }
}

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */






/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */

let aktndex = 0;

const JOBBGOMB = document.querySelector(".jobb")

JOBBGOMB.addEventListener("click", JobbGombFunkcio)

function JobbGombFunkcio() {
    aktndex++
    if (aktndex>=KEPEK.length) {
        aktndex =0
        
    }
    NAGYKEP.src = KISKEPEK[aktndex].src
    
}

const BALGOMB = document.querySelector(".bal")

BALGOMB.addEventListener("click", BalGombFunkcio)

function BalGombFunkcio() {
    aktndex--
    if (aktndex=0) {
        aktndex = KISKEPEK.length-1
        
    }
    NAGYKEP.src = KISKEPEK[aktndex].src
    
}
    






/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
