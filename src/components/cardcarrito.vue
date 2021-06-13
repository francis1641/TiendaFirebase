<template>
    <div class="card">
          <h3>{{ carritoart.nameArticulo }}</h3>
        <p class="">El precio es {{carritoart.Precio}}</p>
        <p class="">Hay {{carritoart.Cantidad}} unidades</p>
        <button v-on:click="eliminarCarrito">Eliminar producto</button>                  
    </div>

</template>

<script>
import { db } from '../db'
export default {

    name: 'carrito',
    props: ['carritoart'],
    data() {
        return {
            variable:1,
        }
    },
    methods:{
        eliminarCarrito(){
            db.collection("Carrito").doc(this.variable).delete().then(() => {
            console.log("Document successfully deleted!");
            }).catch((error) => {
            console.error("Error removing document: ", error);
            });
        }
    },


}
</script>

<style scoped>
.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 33.33%;
    background-color: rgba(0, 0, 0, 0.685);
    color: blanchedalmond;
    padding: 1.2rem;
    margin: 0.2rem;
}

</style>