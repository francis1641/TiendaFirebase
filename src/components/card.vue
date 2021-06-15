<template>
    <div class="card">
          <h3>{{ juego.Nombre }}</h3>
          <img v-bind:src="juego.Imagen">
       
                    <p class="">{{juego.Descripcion}}</p>
                    <p class="">El precio es {{juego.Precio}}</p>
                    <p class="">Hay {{juego.Stock}} unidades</p>
                    <button @click="addCarrito" v-if="mostrar" v-bind:disabled="btnmostrar" >Comprar</button>
                    
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
            this.articuloId= this.juego.id;
            this.uid= user.uid;
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
                contador:0,
                uid:"",
                articuloId:"",
            }
        },

    methods:{
  addCarrito(){
            this.contador++;
            db.collection(this.uid).doc(this.articuloId).set({
                Nombre: this.juego.Nombre,
                Precio: this.juego.Precio,
                Cantidad: this.contador
            })
            .then(() => {
                console.log("Document written");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

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