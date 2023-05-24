const app = Vue.createApp({
    data() {
        return {
            filas: 15,
            recipe: {},
            recipes: [],
            respaldo: [],
            favorites: [],
            isLogin: false,
            loading: true,
            recipestoshow: [],
            categories: [{id:1, name:"All"},],
            userpassword: "",
            user: "",
        }
    },
    mounted: function () {
        this.respaldo = this.recipestoshow;

        //AXIOS recipes to show
        for (let i = 0; i < this.filas*4; i++) {
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/random.php'
            }).then((response) => {
                let items = response.data.meals;
                //console.log(items, i)
                items.forEach((element, index) => {
                    if (this.recipestoshow.length > 0) {
                        let find = element.idMeal
                        let s = i-1
                        //console.log(s)
                        //console.log(this.recipestoshow[s])
                        if (this.recipestoshow[s] == "" || this.recipestoshow[s] == null || this.recipestoshow[s] == undefined) {
                            console.log("undefined")
                            s = this.recipestoshow.length-1
                            i = this.recipestoshow.length-1
                        }
                        //console.log(this.recipestoshow[s].name.lastIndexOf(find))
                        if (this.recipestoshow[s].id.lastIndexOf(find) < 0) {
                            this.recipestoshow.push({
                                name: element.strMeal,
                                image: element.strMealThumb,
                                id: element.idMeal,
                                level: "Easy",
                                description: "Se supone va una descripcion que la API no contiene, por lo que se muestera este texto",
                                category: element.strCategory,
                                likes: 18,
                            });
                            //console.log("no se repitio")
                            //console.log(this.recipestoshow[s].name)
                        }else{
                            console.log("se repitio")
                            i = this.recipestoshow.length-1
                        }
                    } else {
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
                    //console.log("lista de show: "+this.recipestoshow.length)
                });
            }).catch(error => console.log(error))
        }
        //Fin de AXIOS recipes to show

        //AXIOS favorites
        for (let i = 0; i < 10; i++) {
            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/random.php'
            }).then((response) => {
                let items = response.data.meals;
                //console.log(items, i)
                items.forEach((element, index) => {
                    if (this.favorites.length > 0) {
                        let find = element.strMeal
                        let s = i-1
                        //console.log(s)
                        //console.log(this.favorites[s])
                        if (this.favorites[s] == "" || this.favorites[s] == null || this.favorites[s] == undefined) {
                            console.log("undefined")
                            s = this.favorites.length-1
                        }
                        //console.log(this.favorites[s].name.lastIndexOf(find))
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
                            //console.log("no se repitio")
                            //console.log(this.favorites[s].name)
                        }else{
                            //console.log("se repitio")
                            this.i = this.favorites.length-1
                            s = this.favorites.length-1
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
                    //console.log("lista de fav: "+this.favorites.length)
                });
            }).catch(error => console.log(error))
        }
        //Fin de AXIOS favorites

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
        
        //Default all recipes
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'
        }).then(
                (response) => {
                    let items = response.data.meals;
                    //console.log(items);
                    this.recipes = [];

                    if(items.length > 0) this.loading = false;

                    items.forEach((element) => {
                        this.recipes.push({
                            name: element.strMeal,
                            image: element.strMealThumb,
                            id: element.idMeal,
                            level: "Easy",
                            instructions: "N/A",
                            category: "Beef",
                            likes: 18,
                            time: "20min ",
                            ingredients: "N/A",
                        });
                    });
        }).catch(error => console.log(error))

        if (this.favorites.length > 10 && this.recipestoshow.length > 30) {
            this.loading = false;
        }
    },
    methods: {
        onClickRecipeDetails(index) {
            //console.log("Recipe iD -> "+ index);
            //this.selectedIndex = index;

            axios({
                method: 'get',
                url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+index
            })
                .then(
                    (response) => {
                        let item = response.data.meals;
                        //console.log(item);
                        
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

                        for(let i = 1; i<20; i++){
                            if(item[0]["strIngredient"+i] !="" && item[0]["strIngredient"+i] !=null){
                                ingredientsList += item[0]["strMeasure"+i] + " - " + item[0]["strIngredient"+i] + "\n";
                            }    
                        }
                        
                        //console.log(ingredientsList);
                        this.recipe.ingredients = ingredientsList;
                        //console.log(this.recipe)
                    })
                .catch(
                    error => console.log(error)
                )
        },

        onClickSelectedCategory(category) {
            //console.log("Algo?")
            if (category=="All") {
                this.recipestoshow = this.respaldo;
            } else {
                axios({
                    method: 'get',
                    url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+category
                }).then((response) => {
                    let items = response.data.meals;
                    //console.log(items);
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

        
    },
})