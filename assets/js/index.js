let formulario = document.getElementById("form");
let inputUno = document.getElementById("exampleFormControlInputUno")
let inputDos = document.getElementById("exampleFormControlInputDos")
let textArea = document.getElementById("exampleFormControlTextareaUno")

formulario.addEventListener("submit",() => {
    alert("Tu mensaje se ha enviado con exito")
    inputUno.value = ""
    inputDos.value = ""
    textArea.value = ""
})