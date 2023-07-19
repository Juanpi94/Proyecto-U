app.component('liked-card', {
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
        liked:{
            type: Boolean
        }
    },
    data(){
        return{
            addLikes: this.likes,
            isliked: this.liked
        }
    },
    mounted: function () {
        
    },
    methods: {
        onClickLike(){
            this.$emit('recipeactionlike', this.id);
            this.addLikes++;
            this.isliked = true;
        },
        onClickUnLike(){
            this.$emit('recipeactiondislike', this.id);
            this.addLikes--;
            this.isliked = false;
        },
        onClickViewRecipe(){
            this.$emit('recipedetails', this.id);
        }
    },
    template:
        /*html*/
        `
        <div class="card">
            <div class="card-header box-orange">
                <div class="row justify-content-evenly w-100">
                    <div class="col w-75">
                        <p class="sf-dump-sf-dump-ellipsis-path fs-6 card-title"> {{name}} </p>
                    </div>
                </div>
                <div>
                    <img v-bind:src="image" class="card-img-top img-fluid" alt="image">
                </div>
            </div>
            <div class="box-gray">
                <div class="pe-2 ps-2">
                    <p class="fw-bold d-flex">Level: {{ level }} </p>
                    <p class="fw-bold d-flex">Category: {{ category }} </p>
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