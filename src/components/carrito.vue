<template>
    <div class="contenido">
        <h3>El precio total es {{precioFinal}}</h3>
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
      precioTotal(){
          return {
              
          }
          
      }
  }
}

</script>


<style scoped>
.contenido{
    display: flex;
}
</style>