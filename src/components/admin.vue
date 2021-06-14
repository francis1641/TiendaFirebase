<template>
    <div class="contenido">
        <button>Dar de alta nuevos productos</button>
        <card v-for="game in juegos" v-bind:juego="game" v-bind:juegoid="game.id" v-bind:key="game.id"/>
      </div>
</template>

<script>
import { db } from '../db'
import card from './cardadmin.vue'
import autentificacion from '../db'
export default {
    data() {
        return {
            juegos: [],
        }
    },
    components:{
        card
    },
      mounted: function() {
        autentificacion.auth.onAuthStateChanged( user => {
          if (!user || !autentificacion.esAdmin(user)) {
                 this.$router.push('contenido');
            
          }
        })
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
