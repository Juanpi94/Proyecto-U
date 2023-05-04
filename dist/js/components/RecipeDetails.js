app.component('recipe-details', {
    template:
        /*html*/
        `
        <!-- Modal -->
        <div class="modal modal-lg fade" id="RecipeDetails" tabindex="-1" aria-labelledby="RecipeDetailsLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header box-orange">
                        <h1 class="modal-title fs-5" id="RecipeDetailsLabel">Receta</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body box-gray">
                        <section>
                            <div class="content w-100 justify-content-around">
                                <div
                                    class="d-flex m-2 p-2 bg-black rounded-4 bg-opacity-50 align-content-center justify-content-center">
                                    <img class="p-2 rounded-4 img-fluid" src="/dist/imgs/4.jpg" alt="">
                                </div>
                                <div
                                    class="d-flex m-2 p-2 bg-black rounded-4 bg-opacity-50 align-content-center justify-content-center">
                                    <div class="p-2 text-white w-100">
                                        <h3>Nombre de la receta:</h3>
                                        <p>Olla de carne</p>
                                        <h3>Dificultad:</h3>
                                        <p>Facil</p>
                                        <div class="content">
                                            <div class="m-1 w-50">
                                                <h3>Tiempo :</h3>
                                                <p>20min</p>
                                            </div>
                                            <div class="m-1 w-50">
                                                <h3>Tiempo total:</h3>
                                                <p>4horas</p>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex m-2 p-2 bg-black rounded-4 bg-opacity-50">
                                <div class="p-2 text-white">
                                    <h3>Descripcion de la receta</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati veniam esse
                                        reprehenderit beatae ipsam totam nobis possimus minus. Doloremque porro sint
                                        delectus
                                        omnis laudantium exercitationem sequi animi ducimus alias voluptate!
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates deleniti in,
                                        animi
                                        temporibus quibusdam quaerat itaque nihil quis nulla porro, quas beatae. Aliquid
                                        quis
                                        repellat, quod rerum iusto sed sapiente.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="modal-footer box-orange">
                        <button type="button" class="btn-style" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
        `
})