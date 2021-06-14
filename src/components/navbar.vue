<template>
        <div id="nav">
          <ul class="nav--links">
            <li><router-link to="/contenido">Contenido</router-link></li>
            <li><router-link to="/about">Sobre nosotros</router-link></li>
            <li><router-link to="/carrito">Carrito</router-link></li>
            <li v-if="administrador"><router-link to="/admin">Panel de administracion</router-link></li>
            <li v-if="!authenticated"><router-link to="/login">Iniciar sesion</router-link></li>

            <div v-if="authenticated" class="sesion">
              <button @click="cerrarSesion">Logout</button>

            </div>
          </ul>
        </div>
  
</template>

<script>
import autentificacion from '../db'

export default {
  data() {
    return {
      administrador:false,
      juegos: [],
      user:{
        loggedIn: false,
        data:{},
      },
    }
  },

  mounted: function() {
      autentificacion.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
          console.log(user);
          this.administrar();
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
          this.administrador=false;
        }
      })
  },
    methods:{

      administrar(){
       if(this.user.data.uid== "E9dOhWXwJKSx2aQ6xBGA47u0xZP2"){
          this.administrador=true;
        }
      },

    cerrarSesion(){
        autentificacion.logout();
        this.$notify({
          group: 'sesion',
          title: 'Has cerrado sesion correctamente',
          position: 'top center',
          text: '¡Hasta luego!'
        });
    },

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
    },
  }
}
</script>


<style scoped>
.nav{
  display: flex;
  background-color: black;

}
.nav--links{
    background-color: black;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.sesion{
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

button{
  height: 2rem;
  padding: .1rem .1rem;
  margin: .3rem;
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