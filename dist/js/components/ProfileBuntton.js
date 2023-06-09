app.component('profile-button', {
    methods:{
        onClickLogOut(){
            this.$emit('logout');
        }
    },
    template:
    /*html*/
    `
    <div class="dropdown">
        <button type="button" class="btn-style dropdown-toggle" 
            data-bs-toggle="dropdown" 
            aria-expanded="false" 
            data-bs-auto-close="outside">
            <i class="fa-solid fa-user ms-1 me-1"></i>Perfil
        </button>
        <form class="dropdown-menu p-2 menu-area">
            <ul>
                <li><a href="/dev/scss/pages/profile.html"><i class="fa-solid fa-user"></i>Perfil</a></li>
                <li><a href="#"><i class="fa-solid fa-gear"></i>Config</a></li>
                <li><a href="http://localhost/claseinteractivas/public/recipes"><i class="fa-solid fa-circle-info"></i>Ayuda</a></li>
                <li><a href="#"><i class="fa-solid fa-bug"></i>Reportar</a></li>
                <li><a href="/dist/index.html" v-on:click="onClickLogOut"><i class="fa-solid fa-right-from-bracket"></i>Salir</a>
                </li>
            </ul>
        </form>
    </div>
    `
})