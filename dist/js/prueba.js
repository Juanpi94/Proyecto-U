const app = Vue.createApp({
    data() {
        return {
            name: '',
            option1: '',
            option2: '',
            time1: '',
            time2: '',
            comment: '',
            description: '',
            image: null,
            imageUrl: null,
            folderName: '',

        }
    },
    mounted: function () {
    },
    methods: {
        onSubmit() {
            console.log(this.image)
            /*const data = [
                { Nombre: this.name,
                    Opcion1: this.option1,
                    Opcion2: this.option2, 
                    Imagen:this.image.url,
                    Hora1: this.time1, 
                    Hora2: this.time2, 
                    Comentario:this.comment,
                    Descripcion:this.description },
            ];*/
            const csv = Papa.unparse(data);
            const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', 'datos.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

        onImageChange(event) {
            this.image = event.target.files[0];
        },

        onFileChange(event) {
            this.image = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                this.imageUrl = reader.result;
            };
            reader.readAsDataURL(this.image);
        },
        saveImage() {
            const formData = new FormData();
            formData.append('image', this.image);
            fetch('/guardar-imagen', {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => {
                    this.imageUrl = data.url;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        createFolder() {
            fetch('/crear-carpeta', {
                method: 'POST',
                body: JSON.stringify({ folderName: this.folderName }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()).then(data => { console.log(data); }).catch(error => { console.error(error); });
        }
    }
})
