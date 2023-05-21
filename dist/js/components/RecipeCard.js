app.component('recipe-card', {
    props: {
        id: {
            type: Number,
            default: 0
        },
        image:{
            type: String
        }
    },
    methods: {
        onClickViewRecipe() {

        }
    },
    template:
        /*html*/
        `
        <div class="card-header">
            <img v-bind:src="image" class="card-img-top img-fluid" alt="image">
         </div>
        <div class="card-body">
            <h5 class="card-title">{{ id }}</h5>
            <p class="card-text">
                Some quick example text to build 
                on the card title and make up 
                the bulk of the card's content.
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
        </div>`
})