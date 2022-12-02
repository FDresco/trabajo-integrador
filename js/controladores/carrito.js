
//const btnCarrito = document.getElementsByClassName('search-bar__carrito-container')[0]

//const { preferences } = require("joi")
    
    class CarritoController extends CarritoModel {
      constructor() {
        super()

        try {
          // console.log(JSON.parse(localStorage.getItem('carrito')))
          this.carrito = JSON.parse(localStorage.getItem("carrito")) || []
        } catch (error) {
          console.error("Algo ocurrió con la lectura del localStorage", error)
          this.carrito = []
          localStorage.setItem("carrito", this.carrito)
        }
      }

      elProductoEstaEnElCarrito(producto) {
        return this.carrito.filter((prod) => prod.id == producto.id).length
      }

      obtenerProductoDeCarrito(producto) {
        return this.carrito.find((prod) => prod.id == producto.id)
      }

      agregarAlCarrito(producto) {
        //console.log(producto)

        if (!this.elProductoEstaEnElCarrito(producto)) {
          
          producto.cantidad = 1
          this.carrito.push(producto)

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500,
          })

         function cambiarCarrito() {
          const carritoContainer = document.getElementsByClassName("search-bar__carrito-container")[0]
          //console.log(carritoContainer)
          carritoContainer.style.background = "no-repeat center/150% url(/icons/carrito-nuevo.svg)"
              }
        
        cambiarCarrito()
    

        } else {
          const productoDeCarrito = this.obtenerProductoDeCarrito(producto)
          productoDeCarrito.cantidad++

        }

        localStorage.setItem("carrito", JSON.stringify(this.carrito))
      }

      async borrarProductoCarrito(id) {
        try {
          const index = this.carrito.findIndex((prod) => prod.id == id)
          this.carrito.splice(index, 1)
          localStorage.setItem("carrito", JSON.stringify(this.carrito))

          await renderTablaCarrito(this.carrito)

          //const carritoContainer = document.getElementsByClassName("search-bar__carrito-container")[0]
          //carritoContainer.style.background = "no-repeat center/150% url(/icons/carrito2.svg)"

        } catch (error) {
          console.log(error)
        }
      }

      async enviarCarrito() {
        try {
          const elemSectionCarrito =
            document.getElementsByClassName("section-carrito")[0]

          elemSectionCarrito.innerHTML = "<h2>Enviando...</h2>"
          const preference = await carritoService.guardarCarritoServicio(this.carrito)
          this.carrito = []
          localStorage.setItem("carrito", JSON.stringify(this.carrito))

          elemSectionCarrito.innerHTML = "<h2>Tu compra fue realizada con éxito!</h2>"

          setTimeout( async () => {
                elemSectionCarrito.classList.remove('section-carrito--visible')
                /* mostraCarrito = false */
                console.log(preference)
                await renderPago(preference)
            }, 0)


          this.cerrarCarrito(elemSectionCarrito)

          const carritoContainer = document.getElementsByClassName("search-bar__carrito-container")[0]
          carritoContainer.style.background = "no-repeat center/150% url(/icons/carrito2.svg)"

        } catch (error) {
          console.error(error)
        }
      }

      cerrarCarrito(elemSectionCarrito) {
        const btn = document.createElement("button")
        btn.classList.add("btn--cerrar")
        btn.innerHTML = `<img src="icons/cerrar.svg" alt="cerrar">`
        elemSectionCarrito.appendChild(btn)

        btn.addEventListener("click", () => {
          elemSectionCarrito.classList.remove("section-carrito--visible")
          mostrarCarrito = false
        })
      }
    }



    /* `<img src="icons/carrito-agregar.svg" alt="carrito-nuevo">` */

    const carritoController = new CarritoController()

