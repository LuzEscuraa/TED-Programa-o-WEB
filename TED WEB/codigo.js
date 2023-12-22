function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function branco(){
    var candidadoB = 105;
    if (sessionStorage.getItem(candidadoB) !== null) {
        votosB = parseInt(sessionStorage.getItem(candidadoB)) + 1;
        sessionStorage.setItem(candidadoB, votosB);
    } 
    else {
        sessionStorage.setItem(candidadoB, 1);

    }
    alert("Comfirmado voto em branco")

}


function votar() {

    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidado = (valor1 * 10) + valor2;
    if (sessionStorage.getItem(candidado) !== null) {
        votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        sessionStorage.setItem(candidado, votos);
    } else {
        sessionStorage.setItem(candidado, 1);
    
    }
    if (candidado == 1) {
        alert("Confirmado voto no candidato BrTT 01")
    }
    if (candidado == 2) {
        alert("Confirmado voto no candidato Carlinhos Brown 02")
    }
    if (candidado == 3) {
        alert("Confirmado voto no candidato MC Bin Laden 03")
    }
    if (candidado == 4) {
        alert("Confirmado voto no candidato Dj André Marques 04")
    }
    if (candidado == 5) {
        alert("Confirmado voto no candidata Pitty 05")
    }else if(candidado != 1 && candidado != 2 && candidado != 3 && candidado != 4 && candidado != 5){
        
        alert("Candidato não encontrado")
    }
   
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function resultado() {
    document.getElementById("resultado").innerHTML="";
    for(i=0;i<6;i++){
        if (sessionStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "Candidato "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";


        } 


}
for(j=101;j<107;j++){
    if (sessionStorage.getItem(j) !== null) {
document.getElementById("resultado").innerHTML += "Votos em branco:"+sessionStorage.getItem(j)+" votos<br/>";
}
}
}