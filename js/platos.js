let resto = document.querySelector(".contenedor_tarjetas")

fetch('json/platos_argentinos.json')
.then(response => {
     return response.json()
    })
.then(data => {
    for (let i=0; i < 5; i++){ 
        document.querySelector('.contenedor_tarjetas').innerHTML +=/*html*/`
        <a href="plato.html" class="tarjeta sombra">
            <div class="foto pr">
                <img class="img_fit" src="${data[i].image}" alt="">
                <div class="tag centgrid pa sombra ">${data[i].price}</div>
            </div>
            <div class="plato_desc pd25">
                <h4>${data[i].name}</h4>
                <span>${data[i].description}</span> 
            </div>
        </a>`
    }
})