app.component('option-category', {
    props:{
        name:{
            type:String
        }
    },
    methods:{
        onClickCategoryButton(){
            //console.log(this.name);
            //this.$emit('selectedcategory', this.name);
        }
    },
    template: 
    /*html*/
    `<option value="{{ name }}" selected> {{ name }} </option>`
})