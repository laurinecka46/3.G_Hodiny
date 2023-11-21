function ukazka(pozdrav) {
    console.log(pozdrav)
    console.log("nazdar")
}

ukazka("dobry den")
ukazka("ahoj")

function scitani(cisloA, cisloB) {
    let vysledek = cisloA + cisloB
    console.log(vysledek)
}

scitani(3, 8)

function prevod(km) {
    let vysledek = km * 0.62137
    return vysledek
}
prevod(5)

console.log(prevod(50))
let vysledekPrevodu = prevod(30)
console.log(vysledekPrevodu)
