const char1 = document.getElementById('car1').value 
const char2 = document.getElementById('car2').value
const char3 = document.getElementById('car3')
const char4 = document.getElementById('car4')
const char5 = document.getElementById('car5')
const char6 = document.getElementById('car6')
const char7 = document.getElementById('car7')

const descubrirPatente =()=>{

    if(typeof char3 === 'number'){
        return 'Argentina'
    } else if (typeof char4 === 'string'){
        return 'Paraguay'
    } else if (typeof char5 === 'string'){
        return 'Brasil'
    } else if (typeof char5 === 'number'){
        return 'Uruguay'
    }
}

console.log(descubrirPatente())
