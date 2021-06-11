<template>
        <div id="nav">
          <ul class="nav--links">
           <li><router-link to="/contenido">Contenido</router-link></li>
          <li><router-link to="/navbar">Navbar</router-link></li>
            <li><router-link to="/carrito">Carrito</router-link></li>
            <li><a href="#">Login</a></li>
              <button v-if="!authenticated" @click="abrirSesion()">Abrir sesion con Google</button>
          <div v-if="authenticated">
            <button @click="cerrarSesion">Logout</button>
            <h1>Hi {{ firstName }}!</h1>
          </div>
          </ul>


        </div>
  
</template>

<script>
import autentificacion from '../db'

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
.nav{
}

.nav--links{
    background-color: black;
  list-style: none;
  display: flex;
}

.nav--links li{
padding:1.2rem;
text-decoration: none;
}

a:link, a:visited, a:active {
    text-decoration:none;
    color: white;
}
</style>