const productos = []
const camposValidos = [false, false, false, false, false, false, false]

const inputs = document.querySelectorAll(".input-alta")
console.log(inputs)
const form = document.querySelector(".form-alta")
console.log(form)
const button = document.querySelector(".boton-alta")
console.log(button)
button.disabled = true

console.log(inputs, form, button)

//Mostrar u ocultar el mensaje
const setCustomValidityJS = (mensaje, index) => {
  let divs = document.querySelectorAll("form div")
  divs[index].innerHTML = mensaje
  divs[index].style.display = mensaje ? "block" : "none"
}

//Para comprobar la validez de los campos
const algunCampoValido = () => {
  let valido = //tabla de verdad. si todos son true, va a ser true. si alguno es false, va a ser false.
    camposValidos[0] &&
    camposValidos[1] &&
    camposValidos[2] &&
    camposValidos[3] &&
    camposValidos[4] &&
    camposValidos[5] &&
    camposValidos[6]

  return !valido
}

//Validar campos
const validar = (valor, validador, index) => {
  if (!validador.test(valor)) {
    setCustomValidityJS("Este campo no es valido", index)
    camposValidos[index] = false
    button.disabled = true
    return null //break
  }

  camposValidos[index] = true
  button.disabled = algunCampoValido() // boolean

  setCustomValidityJS("", index)
  return valor
}

//Todas las expresiones regulares de los campos
const regExpValidar = [
  /^.+$/, //nombre
  /^.+$/, //precio
  /^[0-9]+$/, //stock
  /^.+$/, //marca
  /^.+$/, //categoria
  /^.+$/, //detalles
  /^.+$/, //foto
]

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    validar(input.value, regExpValidar[index], index)
  })
})

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const producto = {
    nombre: inputs[0].value,
    precio: inputs[1].value,
    stock: inputs[2].value,
    marca: inputs[3].value,
    categoria: inputs[4].value,
    detalles: inputs[5].value,
    foto: inputs[6].value,
    envio: inputs[7].checked,
  }

  //borrar los input
  inputs.forEach((input) => (input.value = ""))
  //console.log(producto)
  productos.push(producto)
  button.disabled = true
  console.log(productos)
  renderProdsObjetos()
})

//Dibuja los productos
const renderProdsObjetos = () => {
  let html = ""
  for (let i = 0; i < productos.length; i++) {
    html += `<p>${JSON.stringify(productos[i])}</p>`
  }
  document.getElementById("listado-productos").innerHTML = html
}

//Me va a permitir dibujar cada una de las nuevas filas de la tabla
const renderProdsTemplateString = () => {}
