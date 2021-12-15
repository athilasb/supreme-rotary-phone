let calculares = document.querySelector(".painel");
var valore_atuais = ""

function calcular(n) {
    valore_atuais = `${valore_atuais}${n}`;
    calculares.innerText = `${valore_atuais}`;
    document.querySelector("body").style.background = "white";

}



function resultado() {


    try {
        somar = eval(valore_atuais)
        valore_atuais = somar
        calculares.innerText = valore_atuais;
        document.querySelector("body").style.background = "white";


    } catch (error) {
        document.querySelector("body").style.background = "rgb(136, 136, 136)";

        calculares.innerText = ("Ops aconteceu um erro em seu calculo: " + valore_atuais)


    }
    console.log(valore_atuais)

    if (valore_atuais == undefined) {
        valore_atuais = ""
        calculares.innerText = `digite um valor primeiro`
        document.querySelector("body").style.background = "rgb(136, 136, 136)";
    }

}



function zeras() {
    valore_atuais = String(valore_atuais)
    valore_atuais = valore_atuais.substring(0, valore_atuais.length - 1);
    document.querySelector("body").style.background = "white";
    if (valore_atuais == "") {
        calculares.innerText = 'Vamos calcular?'

    } else {
        calculares.innerText = `${valore_atuais}`
    }

}


function total() {
    valore_atuais = ""
    calculares.innerText = `${valore_atuais}`
    document.querySelector("body").style.background = "white";
    if (valore_atuais == "") {
        calculares.innerText = 'Vamos calcular?'

    } else {

    }


}



function escreva() {
    calculares.innerText = 'Vamos calcular?'
    document.querySelector("body").style.background = "white";
}