app.component('add-image', {
    data() {
        return {
            imageUrl: null
        }
    },
    methods: {
        onFileSelected(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.imageUrl = reader.result;
            };
        },
        onClickSave(){
            this.$emit('sendrecipe', this.recipe);
        }
    },
    template:
        /*html*/
        `
        <div class="d-block w-100 p-3">
            <div class="content-recipe w-90 p-2 mb-3 rounded-4 bg-black">
                <img class="align-content-center img-fluid" :src="imageUrl" v-if="imageUrl">
            </div>
            <div class="w-75 input-group mb-3">
                <input type="file" class="form-control" @change="onFileSelected" id="">
            </div>
        </div>           
        `
})