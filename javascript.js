 var textoTemporal = "";
    function encriptar() {
        textoTemporal = document.getElementById("inputText").value;
        let txt = document.getElementById("inputText").value;
        let leng = txt.length;

        let txtNuevo = "";

        for (var i = 0; i < leng; i++) {
         
            if (txt[i] == "e") {
                txtNuevo = txtNuevo + "enter";
            } else if (txt[i] == "i") {
                txtNuevo = txtNuevo + "imes";
            } else if (txt[i] == "a") {
                txtNuevo = txtNuevo + "ai";
            } else if (txt[i] == "o") {
                txtNuevo = txtNuevo + "ober";
            } else if (txt[i] == "u") {
                txtNuevo = txtNuevo + "ufat";
            }else {
                txtNuevo = txtNuevo + txt[i];
            }

            document.getElementById("draw").style.display= "none";
            document.getElementById("text1").style.display=" none";
            document.getElementById("copiar").style.display= "show";
             document.getElementById("copiar").style.display= "inherit";
        }

        document.getElementById("text2").value = txtNuevo;
    }

    

    function RestablecerTexto(){
        document.getElementById("text2").value = textoTemporal;

    }

    function copy() {
    var contenido =document.querySelector("#text2");
    contenido.select();
    document.execCommand("cut");
    alert("¡Texto copiado! ");
    }