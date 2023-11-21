const obrazek = document.getElementById("obrazek");
const tlacitko = document.getElementById("tlacitko");
const nadpis = document.getElementById("nadpis");
const vse = document.getElementById("vse");


vse.addEventListener("click", function () {
    obrazek.src = "https://www.google.com/search?sca_esv=568474450&rlz=1C1GCEU_csCZ1075&q=prazdniny&tbm=isch&source=lnms&sa=X&ved=2ahUKEwidqd2qlMiBAxWHzwIHHftpAnMQ0pQJegQIDRAB&biw=958&bih=953#imgrc=YLMbW8n9icE61M"
    nadpis.innerText = "Už byly"
)}