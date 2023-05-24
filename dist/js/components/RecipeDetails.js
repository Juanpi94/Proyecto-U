app.component('recipe-details', {
    props: {
        name:{
            type:String
        },
        image:{
            type:String
        },
        ingredients:{
            type:String
        },
        instructions:{
            type:String
        },
        category:{
            type: String,
            default: "Recipe category"
        },
        time:{
            type: String,
            default: "0min"
        },
        totaltime:{
            type: String,
            default: "0min"  
        },
        level:{
            type: String,
            default: "Recipe level"
        },
    },
    template:
        /*html*/
        `
        <!-- Modal -->
        <div class="modal modal-lg fade" 
            id="RecipeDetails" 
            tabindex="-1" 
            aria-labelledby="RecipeDetailsLabel" 
            aria-hidden="true">

            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header box-orange">
                        <h2 class="modal-title fw-bold text-white" id="RecipeDetailsLabel">{{ name }}</h2>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body box-gray">
                        <section>
                            <div class="content w-100 justify-content-around">
                                <div class="modal-img box-centered m-2 p-2 bg-black rounded-4 bg-opacity-50">
                                    <img class="p-2 rounded-4 img-fluid" v-bind:src="image" alt="{{ name }}">>
                                </div>
                                <div
                                    class="box-centered m-2 p-2 bg-black rounded-4 bg-opacity-50">
                                    <div class="p-2 text-white w-100">
                                        <h3>Nombre de la receta:</h3>
                                        <h4>{{ name }}</h4>
                                        <h3>Dificultad:</h3>
                                        <p>{{ level }}</p>
                                        <div class="content box-centered">
                                            <div class="m-1 w-50">
                                                <h3>Tiempo :</h3>
                                                <p>{{ time }}</p>
                                            </div>
                                            <div class="m-1 w-50">
                                                <h3>Tiempo total:</h3>
                                                <p>{{ totaltime }}</p>
                                            </div>
                                        </div>
                                        <h5><span class="fw-bold">Categoria: </span>{{ category }}</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex m-2 p-2 bg-black rounded-4 bg-opacity-50">
                                <div class="p-2 text-white">
                                    <h4 class="fw-bold">ingredientes de la receta</h4>
                                    <p>{{ ingredients }}</p>
                                    <h4 class="fw-bold">Descripcion de la receta</h4>
                                    <p>{{ instructions }}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="modal-footer box-orange">
                        <button type="button" class="btn-style" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        `
})