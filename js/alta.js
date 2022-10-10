
/* ----------------------------------------------- */
/* Declaraciones de variables y funciones globales */
/* ----------------------------------------------- */
let inputs
let form
let button
let camposValidos

// Mostrar u ocultar el mensaje
const setCustomValidityJS = (mensaje, index) => {
    let divs = document.querySelectorAll('form div')
    divs[index].innerHTML = mensaje
    divs[index].style.display = mensaje ? 'block' : 'none'
}

// Para comprobar la validez de los campos
const algunCampoValido = () => {
    let valido = 
        camposValidos[0] && 
        camposValidos[1] && 
        camposValidos[2] &&
        camposValidos[3] && 
        camposValidos[4] && 
        camposValidos[5] && 
        camposValidos[6] 
        
    return !valido
}

// Validar campos
const validar = (valor, validador, index) => {
    //console.log(valor, validador, index)

    if(!validador.test(valor)) {
        setCustomValidityJS('Este campo no es válido', index)
        camposValidos[index] = false
        button.disabled = true
        return null // break
    }

    camposValidos[index] = true
    button.disabled = algunCampoValido() // boolean

    setCustomValidityJS('', index)
    return valor
}

// Todas las expresiones regulares de los campos
const regExpValidar = [
    /^.+$/, // regexp nombre
    /^.+$/, // regexp precio
    /^[0-9]+$/, // regexp stock
    /^.+$/, // regexp marca
    /^.+$/, // regexp categoria
    /^.+$/, // regexp detalles
    /^.+$/ // regexp foto
]

// Rendereabamos la plantilla
const renderProds = () => {
    
    const xhr = new XMLHttpRequest()
    xhr.open('get', 'plantillas/listado.hbs')
    xhr.addEventListener('load', () => {
        if(xhr.status === 200) {
            let plantillaHbs = xhr.response
            // console.log(plantillaHbs)

            let template = Handlebars.compile(plantillaHbs)
            // console.log(template)
            console.warn(productos)
            let html = template(
                {
                    productos: productos,
                    validos: !algunCampoValido()
                }
            )
            
            //console.log(html) // Le agregó a la plantilla los datos de productos
            document.getElementById('listado-productos').innerHTML = html
        }
    })

    xhr.send()
}

// Producto ingresado en el formulario
function leerProductoIngresado() {
    return {
        nombre: inputs[0].value,
        precio: inputs[1].value,
        stock: inputs[2].value,
        marca: inputs[3].value,
        categoria: inputs[4].value,
        detalles: inputs[5].value,
        foto: inputs[6].value,
        envio: inputs[7].checked
    }
}

// Limpiamos los imputs del formulario
function limpiarFormulario() {

    // borro todos los inputs
    inputs.forEach(input => {
        if(input.type != 'checkbox') input.value = ''
        else if(input.type == 'checkbox') input.checked = false
    })

    button.disabled = true
    camposValidos = [false, false, false, false, false, false, false]
}



/* ------------------------------------------------------- */
/* Inicializaciones para el funcionamiento del módulo      */
/* ------------------------------------------------------- */

function initAlta() {
    console.warn('initAlta()')

    inputs = document.querySelectorAll(".input-alta")
    console.log(inputs)
    form = document.querySelector(".form-alta")
    console.log(form)
    button = document.querySelector(".boton-alta")
    console.log(button)
    
    button.disabled = true
    camposValidos = [false, false, false, false, false, false, false] 
    
    inputs.forEach((input,index) => {
        if(input.type != 'checkbox') {
            input.addEventListener('input', () => {
                validar(input.value, regExpValidar[index], index)
            })
        }
    })

    form.addEventListener('submit', e => {
        e.preventDefault() 
                   
        guardarProducto()
    })

    obtenerProductos()
}