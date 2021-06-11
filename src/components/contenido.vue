<template>

    <div>

    <div class="contenido">
        <card v-for="game in juegos" v-bind:juego="game" v-bind:key="game.id"/>
      </div>

    </div>
</template>
<script>
import { db } from '../db'
import autentificacion from '../db'
import card from './card.vue'

export default {
  data() {
    return {
      juegos: [],
      user:{
        loggedIn: false,
        data:{},
      }
    }
  },

  mounted: function() {
      autentificacion.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
  },

  components:{
      card
  },

  firestore: {
    juegos: db.collection('Games'),
  },
  methods:{
    abrirSesion(){
        autentificacion.login();
    },
    cerrarSesion(){
        autentificacion.logout()
    }
  },
  computed:{
    authenticated(){
          return this.user.loggedIn
        },
    firstName(){
      if (this.user.data.displayName) {
          return this.user.data.displayName
      }
          return null
        }
  }
}
</script>

<style scoped>
.contenido{
    display: flex;
}
</style>