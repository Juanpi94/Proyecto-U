app.component('recipe-card', {
    methods: {
        onClickViewRecipe() {
            console.log("Sirve?")
        }
    },
    template:
        /*html*/
        `
        <div class="card m-2">
            <div class="card-header">
                <img src="/dist/imgs/fotos_recetas/2.jpg" 
                    class="card-img-top img-fluid"
                    alt="recipe">
             </div>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title
                    and
                    make
                    up the bulk of the card's content.
                </p>
            </div>
            <div class="card-footer d-flex justify-content-end">
                <!-- Button trigger modal -->
                <button type="button" class="btn-style"
                    v-on:click = "onClickViewRecipe()"
                    data-bs-toggle="modal" 
                    data-bs-target="#RecipeDetails">
                    Ver más
                </button>
            </div>
        </div>
        `
})