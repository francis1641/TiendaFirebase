<template>
    <div class="card">
          <h3>{{ juego.Nombre }}</h3>
          <img v-bind:src="juego.Imagen">
       
                    <p class="">{{juego.Descripcion}}</p>
                    <p class="">El precio es {{juego.Precio}}</p>
                    <p class="">Hay {{juego.Stock}} unidades</p>
                    <button @click="addCarrito" v-if="mostrar" v-bind:disabled="btnmostrar" >Comprar</button>
                    <input v-model="cantidad" v-if="mostrar && juego.Stock" type="number" min="1" v-bind:max="juego.Stock">
                    
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
            this.mostrar=true;
            this.comprobarStock();
        }else{
            this.mostrar=false;
            this.btnmostrar=false;
        }

      })
    },

        data() {    
            return {
                mostrar:false,
                btnmostrar: false,
                num:1
            }
        },

    methods:{
        addCarrito(){
            db.collection("Carrito").doc("this.num").set({
                nameArticulo: this.juego.Nombre,
                Precio: this.juego.Precio,
                Cantidad: this.cantidad,
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            this.num++;
        },

             comprobarStock(){
                if(this.juego.Stock==0){
                    this.btnmostrar=true;
                }
                else{
                    this.btnmostrar=false;
                }
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
    flex-basis: 22rem;
    background-color: rgba(42, 42, 42, 0.637);
    color: blanchedalmond;
    padding: 1.2rem;
    margin: 0.5rem;
}

</style>