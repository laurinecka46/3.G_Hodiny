let inuputStupne = document.getElementById("pole1")
let inputJednotky = document.getElementById("pole2")
let klik = document.getElementById("klik")

klik.addEventListener("click", Trigger)

function Trigger() {
    let InputC = inuputStupne.value
    let InputF = inuputStupne.value
    if (InputC === "C") {
        Celsius()
    }
    if (InputF === "F") {
        Fahrenheit()
    }
}

function Celsius() {
    let RovniceC = (inputJednotky.value * 9) / 5 + 32
    div.innerText = RovniceC + " F"
}

function Fahrenheit() {
    let RovniceF = ((inputJednotky.value - 32) * 5) / 9
    div.innerText = RovniceF + " C"
}
