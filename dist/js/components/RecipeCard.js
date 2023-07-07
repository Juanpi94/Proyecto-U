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
        id:{
            type: Number
        },
        state:{
            type: Boolean
        }
    },
    data(){
        return{
            addLikes: this.likes,
            recipeAction: this.state
        }
    },
    mounted: function () {
        //this.recipeAction = this.state
    },
    methods: {
        onClickLike(){
            this.$emit('recipeaction', this.id);
            this.addLikes++;
            this.isliked = true;
        },
        onClickUnLike(){
            //this.$emit('recipeaction', this.id);
            this.addLikes--;
            this.isliked = false;
        },
        onClickViewRecipe(){
            this.$emit('recipedetails', this.id);
        },
        onClickSaveRecipe(){
            this.$emit('saverecipe', this.id);
            this.recipeAction = true;
        },
        onClickUndoRecipe(){
            this.$emit('undorecipe', this.id);
            this.recipeAction = false;
        },
    },
    template:
        /*html*/
        `
        <div class="card mb-1" style="">
            <div class="card-header box-orange">
                <div class="row justify-content-evenly w-100">
                    <div class="col w-75">
                        <p class="sf-dump-sf-dump-ellipsis-path fs-6 card-title"> {{name}} </p>
                    </div>
                    <div class="col w-25 d-flex justify-content-end">

                        <div v-if="!this.recipeAction">
                            <i class="reaction-icon fa-solid fa-floppy-disk" v-on:click ="onClickSaveRecipe()"><p>save</p></i>
                        </div>
                        <div v-if="this.recipeAction">
                            <i class="reaction-icon fa-solid fa-floppy-disk" v-on:click ="onClickUndoRecipe()"><p>undo</p></i>
                        </div>
                    </div>
                </div>
                <div>
                    <img v-bind:src="image" class="card-img-top img-fluid" alt="image">
                </div>
            </div>
            <div class="card-body box-gray">
                <div class="row text-center">
                    <div class="w-50">
                        <p class="m-0 p-0 fw-bold">Level: </p>
                        <p>{{ level }}</p>
                    </div>
                    <div class="w-50">
                        <p class="m-0 p-0 fw-bold">Category: </p>
                        <p>{{ category }}</p>
                    </div>
                </div>
                <div>
                    <p>{{ description }}</p>
                </div>
                
                <div class="m-1 w-50">
                    <p>Total likes: {{ addLikes }}</p>
                </div>
            </div>
            <div class="card-footer box-orange d-flex justify-content-end">
                <!-- Button trigger modal -->
                <div class="content justify-content-around">
                        <div class="d-flex align-items-center">

                            <div v-if="!this.isliked">
                                <i class="bi bi-hand-thumbs-up-fill reaction-icon" v-on:click = "onClickLike()"></i>
                            </div>
                            <div v-if="this.isliked">
                                <i class="bi bi-hand-thumbs-down-fill reaction-icon" v-on:click = "onClickUnLike()"></i>
                            </div>
                        </div>
                        <button type="button" class="btn-style" 
                            v-on:click="onClickViewRecipe()"
                            data-bs-toggle="modal" 
                            data-bs-target="#RecipeDetails">
                            View more
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `
})