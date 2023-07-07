app.component('recipe-category-button', {
    props:{
        name:{ type:String },
        id:{ type:Number }
    },
    methods:{
        onClickCategoryButton(){
            //console.log(this.name);
            this.$emit('selectedcategory', this.id);
        }
    },
    template: 
    /*html*/
    `<button class='btn-style m-1' v-on:click="onClickCategoryButton"> {{ name }} </button>`
})