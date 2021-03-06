function abrirModal(){
    const modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
}
function fecharModal(){
    const modal = document.getElementsByClassName("modal")[0];
    window.onclick = (click) =>{
        if (click.target==modal){
            modal.style.display = "none";
        }
    }  
}
function aplicarBackground(){
    const url =  document.getElementsByClassName("url")[0];
    if(url.value!=""){
    const back = document.getElementsByClassName("background")[0];
    back.style.backgroundImage = "url(" + url.value + ")";
}}
function removerBackground(){
    const back = document.getElementsByClassName("background")[0];
    back.style.backgroundImage = "none";
    url.value = "";
}

var darkmode;

function toggleVerify(){
    const darkToggle = document.getElementsByClassName("checkbox")[0]
    if(darkToggle.checked == true){
        darkmode = true;
        dark();
    }
    else if(darkToggle.checked == false){
        darkmode = false;
        dark();
    }
}
function dark(){
    // get
    const background = document.getElementsByClassName("background")[0];
    const estado = document.getElementsByClassName("estado")
    const estadoText = document.getElementsByClassName("estadoText")
    const modal = document.getElementsByClassName("modalContent")[0]
    const input = document.getElementsByClassName("input")[0]
    const textoModalSub = document.getElementsByClassName("textoModalSub")[0]
    const textoModalSub2 = document.getElementsByClassName("textoModalSub2")[0]
    const textoModal = document.getElementsByClassName("textoModal")[0]
    const url = document.getElementsByClassName("url")[0]
    const limpar = document.getElementsByClassName("limpar")[0]
    const aplicar = document.getElementsByClassName("aplicar")[0]
    const plus = document.getElementsByClassName("plus")[0]
    const logo = document.getElementsByClassName("logo")[0]
    const engrenagem = document.getElementsByClassName("engrenagem")[0]
    const title = document.getElementsByClassName("title")[0]
    const linha = document.getElementsByClassName("linhaheader")[0]
    // toggle
    for(var i =0; i<estado.length;i++){
        estado[i].classList.toggle("darkEstado");
    }
    for(var i =0; i<estadoText.length;i++){
        estadoText[i].classList.toggle("darkEstadoText");
    }
    limpar.classList.toggle("darkLimpar")
    aplicar.classList.toggle("darkAplicar")
    url.classList.toggle("darkUrl")
    textoModalSub2.classList.toggle("darkTextoModalSub2");
    textoModalSub.classList.toggle("darkTextoModalSub");
    modal.classList.toggle("darkModalContent")
    textoModal.classList.toggle("darkTextoModal")
    input.classList.toggle("darkInput")
   
    if(darkmode==true){
        background.style.backgroundColor = "#232323"
        plus.src = 'assets/plusDark.png'
        logo.src = 'assets/Whitelogo 1.png'
        engrenagem.src = 'assets/Engrenagem Branca.png'
        title.style.color = "white";
        linha.style.backgroundColor = "white"
    }
    else{
        background.style.backgroundColor = "white"
        plus.src = 'assets/plusDefault.png'
        logo.src = 'assets/Bluelogo 1.png'
        engrenagem.src = 'assets/Engrenagem.png'
        title.style.color = "#0C58D3";
        linha.style.backgroundColor = "#0C58D3"
    }
    
}