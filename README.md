# Proyecto integrador - Educacion IT

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/main.css" />
    <title>Inicio</title>
  </head>
  <body>
    <header class="main-header">
      <input type="checkbox" id="menu" />

      <nav class="nav-bar">
        <ul class="nav-bar__nav-list">
          <li class="nav-bar__nav-item">
            <a href="" id="inicio" class="nav-bar__nav-link"> Inicio </a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" id="alta"  class="nav-bar__nav-link"> Alta </a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" id="contacto" class="nav-bar__nav-link"> Contacto </a>
          </li>
          <li class="nav-bar__nav-item">
            <a href="" id="nosotros" class="nav-bar__nav-link"> Nosotros </a>
          </li>
        </ul>
      </nav>
      <!-- nav-bar -->

      <div class="search-bar">
        <div class="search-bar__logo-container">Logo</div>
        <form action="" class="search-bar__form-container">
          <label for="busqueda" class="search-bar__form-label">Buscar</label>
          <input type="search" class="search-bar__form-search" id="busqueda" />
          <input type="submit" class="search-bar__form-submit" value="Buscar" />
        </form>
        <div class="search-bar__carrito-container">C</div>
        <div class="menu-toggle">
          <label for="menu" class="menu-toggle__label">
            <span class="menu-toggle__top-bread"></span>
            <span class="menu-toggle__meat"></span>
            <span class="menu-toggle__bottom-bread"></span>
          </label>
        </div>
      </div>
      <!-- search-bar -->
    </header>
    <!-- <header> -->

       <div class="section-carrito"></div>

    <main></main>

    <footer></footer>


     <!-- Código de librerias -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"></script>

    <!-- Codigo de plantillas -->
    <script src="js/alta.js"></script>
    <script src="js/nosotros.js"></script>
    <script src="js/contacto.js"></script>
    <script src="js/card.js"></script>
        
   <!--  codigo del carrito -->
    <script src="js/carrito.js"></script>

    <!-- codigo del http -->
    <script src="js/http.client.js"></script>

    <!-- productos -->
    <script src="js/producto.service.js"></script>
    <script src="js/productos.js"></script>

    <!-- codigo de arranque -->
    <script src="js/main.js"></script>


  </body>
</html>