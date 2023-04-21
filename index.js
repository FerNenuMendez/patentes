const paises = [
    {
        nombre: "REPUBLICA ARGENTINA",
        bandera:"banderas/barg.png",
    },
    {
        nombre: "BRASIL",
        bandera:"banderas/bbra.png",
    },
    {
        nombre: "URUGUAY",
        bandera:"banderas/buru.png",
    },
    {
        nombre: "PARAGUAY",
        bandera:"banderas/bpar.png",
    },
]
const char1 = document.getElementById('car1')
const char2 = document.getElementById('car2')
const char3 = document.getElementById('car3')
const char4 = document.getElementById('car4')
const char5 = document.getElementById('car5')
const char6 = document.getElementById('car6')
const char7 = document.getElementById('car7')

const imgBandera = document.getElementById('div2img')
const pNombre = document.getElementById('div1p')
const pPatente = document.getElementById('div3p')
const br = document.getElementById('div4')

const buttom = document.getElementById('btnSubmit')

const descubrirPatente =()=>{
    if(!isNaN(char3.value)){
        return 'REPUBLICA ARGENTINA'
    } else if (isNaN(char4.value)){
        return 'PARAGUAY'
    } else if (isNaN(char5.value)){
        return 'BRASIL'
    } else if (!isNaN(char5.value)){
        return 'URUGUAY'
    }
}

const armarDenominacion =(e)=>{
    switch(e){
        case "REPUBLICA ARGENTINA":
            pPatente.innerText = (char1.value+char2.value+"   "+char3.value+char4.value+char5.value+"   "+char6.value+char7.value),br.style.display="none"
            break;
        case "PARAGUAY":
        case "URUGUAY":
            pPatente.innerText = (char1.value+char2.value+char3.value+"   "+char4.value+char5.value+char6.value+char7.value),br.style.display="none"
            break;
        case "BRASIL":
            pPatente.innerText = (char1.value+char2.value+char3.value+char4.value+char5.value+char6.value+char7.value),br.style.display="flex"
            break;
            default:"";
    }
} 

const armarPatente=(pais)=>{
    const paisFiltrado = paises.filter(paiSelect => paiSelect.nombre === pais)[0];
    imgBandera.setAttribute('src', paisFiltrado.bandera)
    pNombre.innerText = (paisFiltrado.nombre)
    armarDenominacion(pais)
    console.log(char4.value)
}

buttom.addEventListener('click', function(event) {
    event.preventDefault();
    armarPatente(descubrirPatente())
});


