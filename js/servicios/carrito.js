class CarritoService {
  URL_CARRITO = "https://633ccbbcf2b0e623dc67cae2.mockapi.io/carrito/"

  async guardarCarritoServicio(carrito) {
    const carritoGuardado = await http.post(this.URL_CARRITO, carrito)
    return carritoGuardado
  }
}

const carritoService = new CarritoService()
