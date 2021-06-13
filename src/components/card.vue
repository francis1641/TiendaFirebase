<template>
    <div class="card">
          <h3>{{ juego.Nombre }}</h3>
          <img v-bind:src="juego.Imagen">
                    <p class="">{{juego.Descripcion}}</p>
                    <p class="">El precio es {{juego.Precio}}</p>
                    <p class="">Hay {{juego.Stock}} unidades</p>
                    <button @click="addCarrito">Comprar</button>
                    <input v-model="total" type="number" min="1" v-bind:max="juego.Stock">
                    
    </div>

</template>

<script>
import { db } from '../db'
export default {

    name: 'contenido',
    props: ['juego'],
    methods:{
        data() {
            return {
            }
        },

        addCarrito(){
            db.collection("Carrito").doc("1").set({
                nameArticulo: this.juego.Nombre,
                Precio: this.juego.Precio,
                Cantidad: this.total,
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

        },

/*        comprobarStock(){
            if(juego.Stock==0)
                nostock=true;
        }*/
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