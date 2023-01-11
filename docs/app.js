let cuenta = 0;
const valor = document.querySelector("#numero");
const botones = document.querySelectorAll(".boton");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const colorFondo = document.getElementById("color");


function  cambiarColor(){

    let colorHex = "#"

    for(let i = 0 ; i < 6 ; i++){
        
        colorHex += hex[numeroRandom()];
    }
    document.body.style.backgroundColor = colorHex;
    colorFondo.textContent = colorHex;
}

function numeroRandom(){
    return Math.floor(Math.random() * hex.length);
}



botones.forEach(function (boton) {
    boton.addEventListener("click", function (e) {
        const estilo = e.currentTarget.classList;
        if(estilo.contains("menos")){
            cuenta--
            cambiarColor()
        }
        else if(estilo.contains("mas")){
            cuenta++
            cambiarColor()
        }
        else if(estilo.contains("reiniciar")){
            cuenta = 0
            document.body.style.backgroundColor = "#FFFFFF";
            colorFondo.textContent = "#FFFFFF";
        }
        valor.textContent = cuenta;
    })
})



