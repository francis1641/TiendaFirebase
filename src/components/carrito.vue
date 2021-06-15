<template>
    <div class="contenido">
        <card v-for="articulo in carrito" v-bind:carritoart="articulo" v-bind:carritoartid="articulo.id" v-bind:key="articulo.id"/>
      </div>

</template>

<script>
import { db } from '../db'
import card from './cardcarrito.vue'

export default {
  data() {
    return {
      carrito: [],
      precioFinal:10,
    }
  },
  components:{
      card
  },

  firestore: {
    carrito: db.collection('Carrito'),
  },
  computed:{
      /*precioTotal(){
        for(this.i=0; this.i<this.carrito.length; this.i++)
          this.precioFinal+=this.carrito[i].Preciothis.carrito.Cantidad
          return this.precioFinal;
      }*/
  }
}

</script>


<style scoped>
.contenido{
    display: flex;
}
</style>