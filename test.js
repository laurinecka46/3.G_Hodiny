let input2 = document.getElementById ("input2")
   let tlacitko2 = document.getElementById ("tlacitko2")
   let nevim = document.getElementById ("nevim")
   nevim.addEventListener("click", nechci)
    function nechci(){
        let message =  "❤️"
        let newMessage = "";
    for(let i=0; i< input2.value; i++ ){
        newMessage += message;
    }
    nevim.innerText = newMessage
    }