app.component('swiper-area', {
    template:
    /*html*/
    `
    <div>
        <div class="slide-container swiper">
            <div class="slide-content">
                <div class="d-flex card-wrapper swiper-wrapper p-3">
                    <!-- Card -->
                    <recipe-card v-on:recipedetails="onClickRecipeDetails"></recipe-card>
                    <recipe-card v-on:recipedetails="onClickRecipeDetails"></recipe-card>
                    <recipe-card v-on:recipedetails="onClickRecipeDetails"></recipe-card>
                    <recipe-card v-on:recipedetails="onClickRecipeDetails"></recipe-card>
                    <recipe-card v-on:recipedetails="onClickRecipeDetails"></recipe-card>
                    <!-- Card -->
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    `
});