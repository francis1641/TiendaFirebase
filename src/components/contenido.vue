<template>

    <div>
    <div class="contenido">
        <card v-for="game in juegos" v-bind:juego="game" v-bind:key="game.id"/>
      </div>
      <img v-if="mostrar" src="./img/tiendaonline.jpg">
    </div>
</template>
<script>
import { db } from '../db'
import card from './card.vue'

export default {
  data() {
    return {
      juegos: [],
      mostrar:true,
    }
  },
  beforeMount: function(){
    this.mostrar=true;
  },
  mounted:function(){
    this.mostrar=false;
  },
  components:{
      card
  },

  firestore: {
    juegos: db.collection('Games'),
  },
}
</script>

<style scoped>
.contenido{
    display: flex;
}
</style>