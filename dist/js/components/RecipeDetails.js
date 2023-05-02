app.component('recipe-details', {
    template:
    /*html*/
    `
    <!-- Modal -->
    <div class="modal fade" id="RecipeDetails" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="RecipeDetailsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="RecipeDetailsLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-style" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    `
})