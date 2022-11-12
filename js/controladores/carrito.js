
    //const btnCarrito = document.getElementsByClassName('search-bar__carrito-container')[0]
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
        } catch (error) {
          console.log(error)
        }
      }

      async enviarCarrito() {
        try {
          const elemSectionCarrito =
            document.getElementsByClassName("section-carrito")[0]

          elemSectionCarrito.innerHTML = "<h2>Enviando...</h2>"
          await carritoService.guardarCarritoServicio(this.carrito)
          this.carrito = []
          localStorage.setItem("carrito", JSON.stringify(this.carrito))

          elemSectionCarrito.innerHTML = "<h2>Tu compra fue realizada con éxito!</h2>"

          this.cerrarCarrito(elemSectionCarrito)
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



    const carritoController = new CarritoController()

