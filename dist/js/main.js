const app = Vue.createApp({
    data() {
        return {
            user: "",
            recipe: {},
            search: "",
            respaldo: [],
            loading: true,
            favorites: [],
            forgotPass: "",
            isLogin: false,
            filtros: false,
            userrecipes: [],
            userpassword: "",
            recipestoshow: [],
            categories: [{ id: 1, name: "All" },],
        }
    },
    mounted: function () {
        this.respaldo = this.recipestoshow;
   
        //Area de login
        if (localStorage.getItem('user') == null) {
            this.user = "";
        }else{
            this.user = localStorage.getItem('user');
        }

        if (localStorage.getItem('userpassword') == null) {
            this.userpassword = "";
        }else{
            this.userpassword = localStorage.getItem('userpassword');
        }

        if (this.user != null && this.user != "" && this.user != undefined) {
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
        //Fin de area de login

        //AXIOS favorites
        for (let i = 0; i < 10; i++) {
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/random.php'
            }).then((response) => {
                let items = response.data.meals;

                items.forEach((element, index) => {
                    if (this.favorites.length > 0) {
                        let find = element.strMeal
                        let s = i - 1

                        if (this.favorites[s] == "" || this.favorites[s] == null || this.favorites[s] == undefined) {
                            s = this.favorites.length - 1
                        }

                        if (this.favorites[s].name.lastIndexOf(find) < 0) {
                            this.favorites.push({
                                name: element.strMeal,
                                image: element.strMealThumb,
                                id: element.idMeal,
                                level: "Easy",
                                description: "Se supone va una descripcion que la API no contiene, por lo que se muestera este texto",
                                category: element.strCategory,
                                likes: 18,
                            });
                        } else {
                            this.i = this.favorites.length - 1
                            s = this.favorites.length - 1
                        }
                    } else {
                        this.favorites.push({
                            name: element.strMeal,
                            image: element.strMealThumb,
                            id: element.idMeal,
                            level: "Easy",
                            description: "Se supone va una descripcion que la API no contiene, por lo que se muestera este texto",
                            category: element.strCategory,
                            likes: 18,
                        });
                    }
                });
            }).catch(error => console.log(error))
        }
        //Fin de AXIOS favorites

        //AXIOS recipes to show
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?f=b'
        }).then((response) => {
            let items = response.data.meals;
            if (items.length > 0) this.loading = false;
            items.forEach((element, index) => {
                
                if (this.recipestoshow.length < 40) {
                    this.recipestoshow.push({
                        name: element.strMeal,
                        image: element.strMealThumb,
                        id: element.idMeal,
                        level: "Easy",
                        description: "Se supone va una descripcion que la API no contiene, por lo que se muestera este texto",
                        category: element.strCategory,
                        likes: 18,
                    });
                }
            });
        }).catch(error => console.log(error))
        //Fin de AXIOS recipes to show

        //AXIOS para las categorias
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        }).then((response) => {
            let items = response.data.meals;
            items.forEach((element, index) => {
                this.categories.push({
                    id: index,
                    name: element.strCategory
                });
            });
        }).catch(error => console.log(error))
    },
    methods: {
        onClickRecipeDetails(index) {
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + index
            }).then((response) => {
                let item = response.data.meals;

                this.recipe.likes = 18;
                this.recipe.level = "Easy";
                this.recipe.time = "20 min";
                this.recipe.totaltime = "160 min";
                this.recipe.id = item[0].idMeal;
                this.recipe.name = item[0].strMeal;
                this.recipe.image = item[0].strMealThumb;
                this.recipe.category = item[0].strCategory;
                this.recipe.instructions = item[0].strInstructions;

                let ingredientsList = "";

                for (let i = 1; i < 20; i++) {
                    if (item[0]["strIngredient" + i] != "" && item[0]["strIngredient" + i] != null) {
                        ingredientsList += item[0]["strMeasure" + i] + " - " + item[0]["strIngredient" + i] + "\n";
                    }
                }

                this.recipe.ingredients = ingredientsList;
            }).catch(error => console.log(error))
        },

        onClickSelectedCategory(category) {
            if (category == "All") {
                this.recipestoshow = this.respaldo;
            } else {
                axios({
                    method: 'get',
                    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
                }).then((response) => {
                    let items = response.data.meals;
                    
                    this.recipestoshow = [];
                    items.forEach((element) => {
                        this.recipestoshow.push({
                            likes: 18,
                            level: "Easy",
                            id: element.idMeal,
                            name: element.strMeal,
                            image: element.strMealThumb,
                            category: category,
                            description: "Se supone va una descripcion que la API no contiene, por lo que se muestera este texto",
                        });
                    });
                }).catch(error => console.log(error))
            }
        },

        onClickLogIn() {
            localStorage.setItem("user", this.user);
            localStorage.setItem("userpassword", this.userpassword);
            alert("Bienvenido "+this.user);
        },

        onClickLogOut() {
            localStorage.removeItem('user')
            localStorage.removeItem('userpassword')
        },

        redirigirLogIn() {
            window.location.href = '/dist/index.html'
        },

        onClickPassForgot() {
            forgotPass = localStorage.setItem("forgotPass", this.forgotPass);
            alert("El link de restablecimiento fue enviado al correo \n"+this.forgotPass);
            this.forgotPass = localStorage.removeItem('forgotPass')
        },

        onClickAddRecipe(){
            if (this.isLogin == true) {
                window.location.href = '/dev/scss/pages/add_recipe.html'
            }else{
                alert("Debes iniciar sesion para agregar una receta");
                window.location.href = '/dev/scss/pages/login.html'
            }
        },

        onClickSAveRecipe(){
            alert("Receta agregada con exito")
            window.location.href = '/dist/index.html'
        },

        onClickSearch() {
            localStorage.setItem("search", this.search);
        
            if (localStorage.getItem("search") == "") {
                this.recipestoshow = this.respaldo;
            }else{
                this.search = localStorage.getItem("search");

                axios({
                    method: 'get',
                    url: 'https://www.themealdb.com/api/json/v1/1/search.php?s='+this.search
                }).then((response) => {
                    let items = response.data.meals;
    
                    this.recipestoshow = [];
                    items.forEach((element) => {
                        this.recipestoshow.push({
                            likes: 18,
                            level: "Easy",
                            id: element.idMeal,
                            name: element.strMeal,
                            image: element.strMealThumb,
                            category: element.category,
                            description: "Se supone va una descripcion que la API no contiene, por lo que se muestera este texto",
                        });
                    });
                }).catch(error => console.log(error))
            }
            
        }
    },
})