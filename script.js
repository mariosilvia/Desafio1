function encriptarTexto() {
  let inputText = document.getElementById("inputText").value;
  let encriptarTexto = inputText.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
  document.getElementById("outputText").value = encriptarTexto;
}

function desencriptarTexto() {
  let encriptarTexto = document.getElementById("outputText").value;
  let desencriptarTexto = encriptarTexto.replace(/enter/g, "e")
                                   .replace(/imes/g, "i")
                                   .replace(/ai/g, "a")
                                   .replace(/ober/g, "o")
                                   .replace(/ufat/g, "u");
  document.getElementById("outputText").value = desencriptarTexto;
}

function copiarTexto() {
  let outputText = document.getElementById("outputText");
  outputText.select();
  outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}

