function initCarrito() {
    console.warn('initCarrito()')
    const btnCarrito = document.getElementsByClassName('search-bar__carrito-container')[0]
    console.log(btnCarrito)
    btnCarrito.addEventListener('click', () => {
        elemSectionCarrito.classList.toggle('section-carrito--visible')
    })
}

initCarrito()
