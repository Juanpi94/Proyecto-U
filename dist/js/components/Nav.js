app.component('nav-area', {
    template:
    /*html*/
    `
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a href="/dist/index.html"><img src="/dist/imgs/logo.svg" class="logo"></a>
            <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="ul-nav navbar-nav m-1">
                    <li class="nav-item m-3">
                        <a aria-current="page" href="/dist/index.html">Inicio</a>
                    </li>
                    <li class="nav-item m-3">
                        <a href="registro-receta.html">Añadir receta</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
})