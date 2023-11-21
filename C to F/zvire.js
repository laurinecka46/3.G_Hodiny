let odpoved = document.getElementById("odpoved")
let odeslani = document.getElementById("odeslani")
let input = document.getElementById("pole")
let nadpis = document.getElementById("nadpis")
let body = document.getElementById("body")
odeslani.addEventListener("click", OdeslaniFunction)

function OdeslaniFunction() {
    let zviratko = input.value
    if (zviratko === "želva") {
        odpoved.innerText = "Želvy mám rád <3"
        body.style.backgroundColor = "green"
    } else if (zviratko === "plameňák") {
        odpoved.innerText = "Nemám rád Lauru ale plameňáky ano"
        body.style.backgroundColor = "pink"
    } else if (zviratko === "liška") {
        odpoved.innerText = "What does the fox say?"
        body.style.backgroundColor = "orange"
    } else {
        odpoved.innerText = "Neznám :/"
        body.style.backgroundColor = "black"
        nadpis.style.color = "white"
    }
}
