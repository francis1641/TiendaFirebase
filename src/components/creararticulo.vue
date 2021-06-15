<template>
    <form>
      <h3>Dar de alta nuevos productos</h3>
      <input type="text"  v-model="nombre" placeholder="nombre del producto">
      <input type="text" v-model="descripcion" placeholder="descripcion">
      <input type="text"  v-model="precio" placeholder="precio">
      <input type="text"  v-model="stock" placeholder="stock">
      <input type="text" v-model="imagen" placeholder="url de la imagen">
      <input @click="darAlta" type="submit">
    </form>
</template>

<script>
import { db } from '../db'

export default ({
    name: 'crearArticulos',
    props: [],
    mounted (){

    },
    data(){
        return{
            nombre:"",
            descripcion:"",
            precio:"",
            stock:"",
            imagen:"",

        }
    },
    methods: {
        darAlta() {
            db.collection("Games").add({
                    Nombre: this.nombre,
                    Precio: this.precio,
                    Stock: this.stock,
                    Descripcion: this.descripcion,
                    Imagen: this.imagen,
                })
                .then(() => {
                    console.log("Document written");
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }
    }

})
</script>