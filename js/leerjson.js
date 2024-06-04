let resto = document.querySelector(".resultados")

fetch('json/restaurantes.json')
.then(response => {
     return response.json()
    })
.then(data => {
    for (let i=0; i < 100; i++){
        let puntu = ""
        let rango = ""

        if (data[i].rango === "4"){
            rango =  "euro euro euro euro"
        }
        else if(data[i].rango === "3"){
            rango =  "euro euro euro"
        }
        else if(data[i].rango === "2"){
            rango =  "euro euro"
        }
        else{
            rango =  "euro"
        }
        //

        if (data[i].puntuacion === "4"){
            puntu =  "star star star star"
        }
        else if(data[i].puntuacion === "3"){
            puntu = "star star star"
        }
        else if(data[i].puntuacion === "2"){
            puntu = "star star"
        }
        else{
            puntu = "star"
        }
        // alert(puntu)
       /**
        * le agregamos un extensión para que se visualice el color de las etiquetas corte html (es6-string-html)
        * @authors : @Pupich , @Maldo , @Nico , @Vouchern ---> xd
       */
        document.querySelector('.resultados').innerHTML +=/*html*/`
            <article class="resto" href="resto.html">
                <div class="img-resto">
                     <a href="resto.html"><img src="${data[i].avatar.src}" alt="" class="img_fit"></a>
                </div>
                <div class="datos-resto pa">
                   ${data[i].name} <br>
                   <span>${data[i].horario} </span>
                   <div class="datos-icons pr">
                        <a class="item_cat">
                            <div class="iconos icon_S">${puntu}</div>
                        </a>
                        <a class="item_cat">
                            <div class="iconos icon_S">${rango}</div>
                        </a>
                   </div>
                </div>
                <div class="puntu-resto">
                    
                </div>
            </article>`  
    }
})
