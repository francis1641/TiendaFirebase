<template>
    <div class="contenido">
        <button>Dar de alta nuevos productos</button>
        <card v-for="game in juegos" v-bind:juego="game" v-bind:key="game.id"/>
      </div>
</template>

<script>
import { db } from '../db'
import card from './cardadmin.vue'
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

    methods:{

    }
}
</script>

<style scoped>
.contenido{
    display: flex;

    align-items: center;
}


</style>
