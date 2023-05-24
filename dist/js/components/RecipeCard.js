app.component('recipe-card', {
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
        onClickLike(){
            //this.$emit('recipelike', this.index);
            this.addLikes++;
        },
        onClickUnLike(){
            //this.$emit('recipeunlike', this.index);
            if(this.addLikes > 0) this.addLikes--;
        },
        onClickViewRecipe(){
            this.$emit('recipedetails', this.index);
            //this.$test.emit('foo', this.name);
        }
    },
    template:
        /*html*/
        `
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
            </div>
            <div class="card-footer box-orange d-flex justify-content-end">
                    <div class="col d-flex">
                        <p class="fs-6 text-success">{{ likes }}</p>
                    </div>
                <!-- Button trigger modal -->
                <button type="button" class="btn-style" 
                    v-on:click="onClickViewRecipe()"
                    data-bs-toggle="modal" 
                    data-bs-target="#RecipeDetails">
                    Ver más
                </button>
            </div>
        </div>`
})