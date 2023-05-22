const app = Vue.createApp({
    data() {
        return {
            isLogin: false,
            categories: [
                {id:1, name:"All"},
            ]
        }
    },
    mounted: function () {
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
            .then(
                (response) => {
                    console.log(response.data.meals);
                    let items = response.data.meals;
                    items.forEach((element, index) => {
                        this.categories.push({
                            id: index,
                            name: element.strCategory
                        });
                    });
                })
            .catch(
                error => console.log(error)
            )
    },
    methods: {
        onClickSelectedCategory(category) {
            console.log("Algo?")
        }
    },
})