<template>
    <div class="contenido">
        <card v-for="game in juegos" v-bind:juego="game" v-bind:key="game.id"/>


    </div>
</template>
<script>
import { db } from '../db'
import card from './card.vue'

export default {
  data() {
    return {
      juegos: [],
    }
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