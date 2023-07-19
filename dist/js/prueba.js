const app = Vue.createApp({
    data() {
        return {
            items: [],
        }
    },
    mounted: function () {
    },
    methods: {

        addItem() {
            // Agregar un nuevo elemento a la lista
            const newItem = { id: `${this.items.length + 1}` , text: `Elemento ${this.items.length + 1}` };
            this.items.push(newItem);
        },
        removeItem($id) {
            // Eliminar el último elemento de la lista
            this.items.splice($id, 1);
        },
    }
})
