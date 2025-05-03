setCode = sessionStorage.getItem("cavePasscode");

var codeDisplay = document.getElementById("code");

function evaluateCode(){
    if(setCode != null){
        codeDisplay.innerText = setCode;
    }
}

function generateManualCode(){
    setCode = "";
    for(let i = 0; i < 6; i++){
        setCode = setCode + Math.floor(Math.random() * 10); 
    }
    sessionStorage.setItem("cavePasscode", setCode);
    codeDisplay.innerText = setCode;
}

evaluateCode();




