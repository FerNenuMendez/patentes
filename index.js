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

const char3 = document.getElementById('car3')
const char4 = document.getElementById('car4')
const char5 = document.getElementById('car5')
const imgBandera = document.getElementById('div2img')
const pNombre = document.getElementById('div1p')

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
const armarPatente=(pais)=>{
    const paisFiltrado = paises.filter(paiSelect => paiSelect.nombre === pais)[0];
    imgBandera.setAttribute('src', paisFiltrado.bandera)
    pNombre.innerText = (paisFiltrado.nombre)
    console.log(paisFiltrado)
}

buttom.addEventListener('click', function(event) {
    event.preventDefault();
    armarPatente(descubrirPatente())
});


