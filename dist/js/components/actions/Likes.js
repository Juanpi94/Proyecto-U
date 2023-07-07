app.component('footer-page', {
    props: {
        name:{
            type:String
        },
    },
    template:
    /*html*/
    `
        <i class="bi bi-hand-thumbs-up-fill me-3 reaction-icon" v-on:click = "onClickLike()"></i>
    `
})