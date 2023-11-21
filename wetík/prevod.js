let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")

function prevod() {
    let textInputOne = inputOne.value
    let textInputTwo = inputTwo.value
    let div = document.getElementById("div")
    if (textInputOne === "F") {
        let vysledek = (5 * (+textInputTwo - 32)) / 9
        div.innerText = vysledek
    }
    if (textInputOne === "C") {
        vysledek = +textInputTwo * (9 / 5) + 32
        div.innerText = vysledek
    }
}
