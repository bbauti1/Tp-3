console.log("conectado")
let nuevaLista = document.createElement("ul")
document.body.appendChild(nuevaLista)
let listaElemento1 = document.createElement("li")
listaElemento1.textContent = "Primer Item List"
nuevaLista.appendChild(listaElemento1)
let listaElemento2 = document.createElement("li")
listaElemento2.textContent = "Segundo Item List"
nuevaLista.appendChild(listaElemento2)
let sumar = document.getElementById("sumar")
let resta = document.getElementById("restar")
let cont = document.getElementById("contador")
let counter = 1
cont.innerText = counter

function suMar(){

    if(counter < 5){
        resta.style.color = "black"
        resta.style.cursos = "pointer"
        counter = counter + 1
        cont.innerText = counter
    }
    else{
        sumar.style.color = "red"
        sumar.style.cursor = "pointer"
    }  
}

function restAr(){
    if(counter>1){
        sumar.style.color = "black"
        sumar.style.cursos = "pointer"
        counter = counter - 1
        cont.innerText = counter
    }
    else{
        resta.style.color = "red"
        resta.style.cursor = "pointer"
    }   
   
}

console.log(counter)