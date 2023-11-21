prictiDva(7)

function prictiDva(x) {
    let vysledek = x + 2
    console.log(vysledek)
}

doporucFilm("pohádka")

function doporucFilm(zanr) {
    if (zanr === "pohádka") {
        console.log("at ziji duchove")
    } else if (zanr === "akční film") {
        console.log("die hard")
    } else if (zanr === "komedie") {
        console.log("The Nice Guys")
    } else console.log("zkus zadat jiný žánr")
}

function vyhazovac(rocnik, aktualníRok) {
    let rok = aktualníRok - rocnik
    if (rok > 18) {
        console.log("mužeš vstoupit")
    } else if (rok < 18) {
        console.log("vstup zakázán")
    }
}
vyhazovac(2003, 2023)
