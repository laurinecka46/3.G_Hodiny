let cislo = prompt("první číslo")
let cislo2 = prompt("druhé číslo")

if (cislo < cislo2) {
    console.log("druhé číslo je větší")
}
else if (cislo === cislo2) {
    console.log("čísla jsou stejná")
}
else {
    console.log("první číslo je větší")
}