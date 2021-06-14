<template>
    <div class="card">
          <h3>{{ juego.Nombre }}</h3>
          <img v-bind:src="juego.Imagen">
       
                    <p class="">{{juego.Descripcion}}</p>
                    <p class="">El precio es {{juego.Precio}}</p>
                    <p class="">Hay {{juego.Stock}} unidades</p>
                    <button @click="addCarrito" v-if="mostrar>0">Comprar</button>
                    <input v-model="total" v-if="mostrar && juego.Stock" type="number" min="0" v-bind:max="juego.Stock">
                    
    </div>

</template>

<script>
import { db } from '../db'
import autentificacion from '../db'
export default {

    name: 'contenido',
    props: ['juego'],

    mounted: function() {
      autentificacion.auth.onAuthStateChanged( user => {
      
        if(user) {
              console.log("Salta")
            this.mostrar=true;
        }else{
            this.mostrar=false;
        }

      })
    },

        data() {    
            return {
                mostrar:false
            }
        },

    methods:{
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

 /*           comprobarStock(){
                if(this.juego.Stock==0){
                    this.stock1=true;
                }
                else{
                    this.stock1=false;
                }
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