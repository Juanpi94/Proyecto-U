app.component('filters', {
    props: {
        id: {
            type: Number,
            default: 0
        },
        image:{
            type: String
        }
    },
    methods: {
        onClickViewRecipe() {

        }
    },
    template:
    /*html*/
    `
        <div class="navbar navbar-expand-lg">
            <div class="container-fluid text-black">
                <h5 class="d-inline me-2">Filtros:</h5>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#filterLike" aria-controls="filterLike" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="content">
                    <div class="collapse navbar-collapse" id="filterLike">
                        <ul class="box-centered navbar-nav">
                            <div class="box-centered w-100">
                                <div>
                                    <button class="btn-style m-2">All</button>
                                </div>
                                <div>
                                    <button class="btn-style m-2">Breakfast</button>
                                </div>
                                <div>
                                    <button class="btn-style m-2">Fastfood</button>
                                </div>
                            </div>
                            <div class="box-centered w-100">
                                <div>
                                    <button class="btn-style m-2">Lunch</button>
                                </div>
                                <div>
                                    <button class="btn-style m-2">Desserts</button>
                                </div>
                                <div>
                                    <button class="btn-style m-2">Drinks</button>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
})