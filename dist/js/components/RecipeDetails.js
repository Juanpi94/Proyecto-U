app.component('recipe-details', {
    props: {
        id:{
            type:Number
        },
        name:{
            type:String
        },
        image:{
            type:String
        },
        ingredients:{
            type:Array
        },
        related:{
            type:Array
        },
        instructions:{
            type:String
        },
        category:{
            type: String,
            default: "Recipe category"
        },
        cookingtime:{
            type: String,
            default: "0min"
        },
        preparationtime:{
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
        }
    },
    methods: {
        
    },
    template:
    /*html*/
        `
        <!-- Modal -->
        
        <!-- Fin modal -->

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
                                        <h3>Recipe name:</h3>
                                        <h4>{{ name }}</h4>
                                        <div class="d-flex justify-content-center">
                                            <h5 class="mx-1">Level:</h5>
                                            <p>{{ level }}</p>
                                        </div>
                                        <div class="">
                                            <div class="d-flex justify-content-center">
                                                <p class="mx-1">Cooking time:</p>
                                                <p>{{ cookingtime }}</p>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <p class="mx-1">Preparation time:</p>
                                                <p>{{ preparationtime }}</p>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <p class="mx-1">Total time:</p>
                                                <p>{{ totaltime }}</p>
                                            </div>
                                        </div>
                                        <h6><span class="fw-bold">Category: </span>{{ category }}</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex m-2 p-2 bg-black rounded-4 bg-opacity-50">
                                <div class="p-2 text-white">
                                    <h4 class="fw-bold">Ingredients:</h4>
                                    <ul>
                                        <li v-for="ingredient in ingredients">
                                          {{ ingredient.amount }} {{ ingredient.measurement_unit }} {{ ingredient.description }}
                                        </li> 
                                    </ul>
                                    <h4 class="fw-bold">Steps to prepare:</h4>
                                    <p v-for="instruction in instructions" class="m-0">
                                        {{ instruction }}.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div class="d-flex m-2 p-2 bg-black rounded-4 bg-opacity-50">
                                <div class="p-2 text-white">
                                    <h4 class="fw-bold">Related Recipe:</h4>
                                    <div class="d-flex justify-content-center">
                                        <button v-for="recipe in related" 
                                            type="button" 
                                            class="btn-style mx-1" >
                                           {{ recipe.name }} 
                                        </button>
                                    </div>
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