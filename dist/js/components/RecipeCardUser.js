app.component('recipe-card-user', {
    props: {
        image:{
            type: String        
        },
        category:{
            type: String,
            default: "Recipe category"
        },
        name:{
            type: String,
            default: "Recipe category"
        },
        description:{
            type: String,
            default: "Recipe description"
        },
        time:{
            type: String,
            default: "Recipe time"
        },
        level:{
            type: String,
            default: "Recipe level"
        },
        likes:{
            type: Number,
            default: 10
        },
        index:{
            type: String
        },
    },
    data(){
        return{
            addLikes: this.likes
        }
    },
    methods: {
        onClickViewRecipe(){
            this.$emit('recipedetails', this.index);
            //this.$test.emit('foo', this.name);
        }
    },
    template:
        /*html*/
        `
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

        <div class="card mb-1">
            <div class="card-header box-orange">
                <div class="row justify-content-evenly">
                    <div class="col">
                        <p class="card-title"> {{name}} </p>
                    </div>
                </div>
                <img v-bind:src="image" class="card-img-top img-fluid" alt="image">
            </div>
            <div class="card-body box-gray">
                <div class="row justify-content-evenly text-center">
                    <div class="w-50">
                        <p class="m-0 p-0 fw-bold">Level: </p>
                        <p>{{ level }}</p>
                    </div>
                    <div class="w-50">
                        <p class="m-0 p-0 fw-bold">Category: </p>
                        <p>{{ category }}</p>
                    </div>
                </div>
                <p>{{ description }}</p>

                <div class="m-1 w-100">
                    <p class="fw-light">Total de likes: {{ addLikes }}</p>
                </div>
            </div>
            <div class="card-footer box-orange d-flex justify-content-end">
                <!-- Button trigger modal -->
                <div class="content box-centered">
                    <div class="d-flex w-100 justify-content-between">
                        <i class="bi bi-trash-fill reaction-icon"></i>
                        <button type="button" class="btn-style" 
                            v-on:click="onClickViewRecipe()"
                            data-bs-toggle="modal" 
                            data-bs-target="#RecipeDetails">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>`
})