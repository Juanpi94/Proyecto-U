const app = Vue.createApp({
    data() {
        return {
            //-------------------
            userLogEmail: "",
            userLogPassword: "",
            //-------------------
            search: "",
            //-------------------
            user: "",
            username: "",
            useremail: "",
            accessToken: "",
            //-------------------
            forgotPass: "",
            //-------------------
            userRegName: "",
            userRegEmail: "",
            userRegCountry: "",
            userRegLastName: "",
            userRegPassword: "",
            //-------------------
            loading: true,
            isLogin: false,
            filtros: false,
            //-------------------
            recipe: [],
            respaldo: [],
            favorites: [],
            categories: [],
            userrecipes: [],
            recipestoshow: [],
            user_like_list: [],
            user_recipe_list: [],
            countries: ["Afganistán", "Albania", "Alemania", "Andorra", "Angola",
                "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina",
                "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas",
                "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín",
                "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina",
                "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso",
                "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá",
                "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano",
                "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil",
                "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto",
                "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia",
                "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia",
                "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia",
                "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu", "Haití",
                "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda",
                "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica",
                "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait",
                "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein",
                "Lituania", "Luxemburgo", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí",
                "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia",
                "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Namibia", "Nauru", "Nepal",
                "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos",
                "Pakistán", "Palaos", "Palestina", "Panamá", "Papúa Nueva Guinea", "Paraguay",
                "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana",
                "República Checa", "República de Macedonia", "República del Congo",
                "República Democrática del Congo", "República Dominicana", "República Sudafricana",
                "Ruanda", "Rumanía", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino",
                "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal",
                "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka",
                "Suazilandia", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia",
                "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago",
                "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay",
                "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"],
        }
    },
    mounted: function () {
        this.respaldo = this.recipestoshow;

        //Area de ususario
            //Area de login
                this.userid = localStorage.getItem('userid')
                this.username = localStorage.getItem('username')
                this.useremail = localStorage.getItem('useremail')
                this.accessToken = localStorage.getItem('accessToken')
                this.userpassword = localStorage.getItem('userpassword')

                if (localStorage.getItem('accessToken') != null) {
                    this.isLogin = true
                } else {
                    this.isLogin = false
                }
            //Fin de area de login

            //AXIOS para las recetas coleccionadas
                this.user_recipe_list = [];
                if (this.isLogin == true) {
                    axios({
                        method: 'get',
                        url: 'http://localhost/claseinteractivas/public/api/users/savedrecipes/' + this.userid
                    }).then((response) => {
                        let items = response.data;
                        if (items.length > 0) {
                            items.forEach((element) => {
                                this.user_recipe_list.push({
                                    name: element.name,
                                    image: "http://localhost/claseinteractivas/public/storage/imgs/" + element.image,
                                    id: element.id,
                                    level: element.level,
                                    isinlist: true,
                                    description: element.description,
                                    category: element.category,
                                    likes: element.likes,
                                });
                            });
                        }
                    }).catch(error => console.log(error))
                }
            //Fin de AXIOS para las recetas coleccionadas

            //AXIOS para las recetas likeadas   (Esto aun no funka)
                /*this.user_like_list = [];
                if (this.isLogin == true) {
                    axios({
                        method: 'get',
                        url: 'http://localhost/claseinteractivas/public/api/users/savedrecipes/' + this.userid
                    }).then((response) => {
                        let items = response.data;
                        if (items.length > 0) {
                            items.forEach((element) => {
                                this.user_recipe_list.push({
                                    name: element.name,
                                    image: "http://localhost/claseinteractivas/public/storage/imgs/" + element.image,
                                    id: element.id,
                                    level: element.level,
                                    description: element.description,
                                    category: element.category,
                                    likes: element.likes,
                                });
                            });
                        }
                    }).catch(error => console.log(error))
                }*/
            //Fin de AXIOS para las recetas likeadas
        //Fin de Area de ususario

        //AXIOS Top10
        axios({
            method: 'get',
            url: 'http://localhost/claseinteractivas/public/api/recipes/top10'
        }).then((response) => {
            let items = response.data;

            items.forEach((element) => {
                recipeAdded = this.user_recipe_list.some(item => item.id === element.id)

                let dataList = element.description.split(" ");
                let textShort = dataList.slice(0, 30).join(" ");
                if (dataList.length > 30) {
                    textShort += "...";
                }
                let description = textShort;

                this.favorites.push({
                    name: element.name,
                    image: "http://localhost/claseinteractivas/public/storage/imgs/" + element.image,
                    id: element.id,
                    level: element.level,
                    description: description,
                    isinlist: recipeAdded,
                    category: element.category,
                    likes: element.likes,
                });
            });
        }).catch(error => console.log(error))
        //Fin de AXIOS Top10

        //AXIOS recipes to show
        axios({
            method: 'get',
            url: 'http://localhost/claseinteractivas/public/api/recipes/all'
        }).then((response) => {
            let items = response.data;
            if (items.length > 50) this.loading = false;

            items.forEach((element) => {
                recipeAdded = this.user_recipe_list.some(item => item.id === element.id)
                this.recipestoshow.push({
                    name: element.name,
                    image: "http://localhost/claseinteractivas/public/storage/imgs/" + element.image,
                    id: element.id,
                    level: element.level,
                    isinlist: recipeAdded,
                    description: element.description,
                    category: element.category,
                    likes: element.likes,
                });
            });
        }).catch(error => console.log(error))
        //Fin de AXIOS recipes to show

        //AXIOS para las categorias
            axios({
                method: 'get',
                url: 'http://localhost/claseinteractivas/public/api/recipes/categories'
            }).then((response) => {
                let items = response.data;
                //console.log(response.data)
                items.forEach((element) => {
                    this.categories.push({
                        id: element.id,
                        name: element.category
                    });
                });
            }).catch(error => console.log(error))
        //Fin de AXIOS para las categorias

    },
    methods: {
        onClickLogIn() {
            const data = {
                logName: this.userLogEmail,
                logPassword: this.userLogPassword
            }

            axios({
                method: 'post',
                url: 'http://localhost/claseinteractivas/public/api/users/login?email=' + data.logName + '&password=' + data.logPassword
            }).then((response) => {
                if (response.data.code == 200) {
                    localStorage.setItem('userid', response.data.user.id)
                    localStorage.setItem('useremail', response.data.user.email)
                    localStorage.setItem('username', response.data.user.name)
                    localStorage.setItem('accessToken', response.data.accessToken)
                    this.username = localStorage.getItem('username')
                    alert("Bienvenido " + this.username);
                    window.location.href = '/dist/index.html'
                }
            }).catch(error => {
                console.log(error)
                alert("Usuario o contraseña incorrectos")
            })
        },

        onClickSearch() {
            localStorage.setItem("search", this.search);

            if (localStorage.getItem("search") == "") {
                this.recipestoshow = this.respaldo;
            } else {
                this.search = localStorage.getItem("search");

                axios({
                    method: 'get',
                    url: 'http://localhost/claseinteractivas/public/api/recipes/searchbyname/' + this.search
                }).then((response) => {
                    let items = response.data;

                    this.recipestoshow = [];
                    items.forEach((element) => {
                        this.recipestoshow.push({
                            name: element.name,
                            image: "http://localhost/claseinteractivas/public/storage/imgs/" + element.image,
                            id: element.id,
                            level: element.level,
                            description: element.description,
                            category: element.category,
                            likes: element.likes,
                        });
                    });
                }).catch(error => console.log(error))
            }

        },

        onClickLogOut() {
            /*axios.get('http://localhost/claseinteractivas/public/api/users/logout', {
                headers: {
                    'Authorization': this.accessToken
                }
            }).then((response) => {
                console.log(response.data)
                localStorage.clear();
            }).catch(error => console.log(error))*/

            localStorage.clear()
        },

        onclickAction(id) {
            if (this.isLogin == true) {
                axios({
                    method: 'get',
                    url: 'http://localhost/claseinteractivas/public/api/users/likes/'+this.userid+'/'+id
                }).then((response) => {
                    //console.log(response.data)
                }).catch(error => console.log(error))
            } else  {
                alert("Debes iniciar sesion para votar por una receta")
                window.location.href = '/dev/scss/pages/login.html'
            }
        },

        onClickRegister() {
            const data = {
                regName: this.userRegName,
                regEmail: this.userRegEmail,
                regLastName: this.userRegLastName,
                regCountry: this.userRegCountry,
                regPassword: this.userRegPassword,
            }

            axios({
                method: 'post',
                url: 'http://localhost/claseinteractivas/public/api/users/register?name='+ data.regName +'&last_name='+ data.regLastName +'&country='+ data.regCountry +'&email='+ data.regEmail +'&password='+ data.regPassword
            }).then((response) => {
                if (response.data.code = 200) {
                    alert("Registrado con exito");
                    window.location.href = '/dev/scss/pages/login.html'
                } else {
                    alert("Erorr al registrar");
                }
            }).catch(error => console.log(error))
        },

        onClickPassForgot() {
            forgotPass = localStorage.setItem("forgotPass", this.forgotPass);
            alert("El link de restablecimiento fue enviado al correo \n" + this.forgotPass);
            this.forgotPass = localStorage.removeItem('forgotPass')
        },

        onClickSaveRecipe(id) {
            if (this.isLogin == true) {
                axios({
                    method: 'get',
                    url: 'http://localhost/claseinteractivas/public/api/users/saverecipe/'+this.userid+'/'+id
                }).then((response) => {
                    console.log(response.data)
                }).catch(error => console.log(error))
            } else {
                alert("Debes iniciar sesion para agregar una receta");
                window.location.href = '/dev/scss/pages/login.html'
            }
        },

        onClickRemoveRecipe(id) {
            if (this.isLogin == true) {
                axios({
                    method: 'get',
                    url: 'http://localhost/claseinteractivas/public/api/users/removesavedrecipe/'+this.userid+'/'+id
                }).then((response) => {
                    console.log(response.data)
                }).catch(error => console.log(error))
            } else {
                alert("Debes iniciar sesion para agregar una receta");
                window.location.href = '/dev/scss/pages/login.html'
            }
        },

        onClickRecipeDetails(id) {
            axios({
                method: 'get',
                url: 'http://localhost/claseinteractivas/public/api/recipes/recipe/' + id
            }).then((response) => {
                //console.log(response.data[0][0]);
                let item = response.data[0][0];

                this.recipe.likes = item.likes;
                this.recipe.level = item.level;
                this.recipe.cookingtime = item.cooking_time + " mins";
                this.recipe.preparationtime = item.preparation_time + " mins";
                this.recipe.totaltime = item.total_time + ' mins';
                this.recipe.portions = item.portions;
                this.recipe.occasion = item.occasion;
                this.recipe.id = id;
                this.recipe.name = item.name;
                this.recipe.image = "http://localhost/claseinteractivas/public/storage/imgs/" + item.image;
                this.recipe.category = item.category;
                this.recipe.ingredients = response.data[1]
                this.recipe.instructions = item.preparation_instructions.split('. ')
                this.recipe.recipeRelated = response.data[2]
            }).catch(error => console.log(error))
        },

        onClickSelectedCategory(id) {
            if (id == 7) {
                this.recipestoshow = this.respaldo;
            } else {
                axios({
                    method: 'get',
                    url: 'http://localhost/claseinteractivas/public/api/recipes/filterby/category/' + id
                }).then((response) => {
                    let items = response.data;

                    this.recipestoshow = [];
                    items.forEach((element) => {
                        this.recipestoshow.push({
                            name: element.name,
                            image: "http://localhost/claseinteractivas/public/storage/imgs/" + element.image,
                            id: element.id,
                            level: element.level,
                            description: element.description,
                            category: element.category,
                            likes: element.likes,
                        });
                    });
                }).catch(error => console.log(error))
            }
        }
    },
})
