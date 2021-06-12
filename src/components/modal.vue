<template>
  <div class="contenido">
    <div>
    <h3 v-if="!authenticated">Inicia sesion aqui</h3>
     <button v-if="!authenticated" @click="abrirSesionGoogle">Login con Google</button>
     <button v-if="!authenticated" @click="abrirSesionFacebook">Login con Facebook</button>
     </div>
    <div>
    <form action="" v-if="!authenticated">
      <p>Introduzca aqui su correo</p>
      <input type="text"  v-model="correo1">
      <p>Introduzca aqui su contraseña</p>
      <input type="password" v-model="contra1">
      <input @click="abrirSesionCorreo" type="submit">
    </form>
    </div>
  </div>


</template>
<script>
import autentificacion from '../db'
export default{




    data() {
        return {
          correo1: '',
          contra1:'',
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
    /* administrar(){
      if(this.userCredential.email== "cenitfran123@gmail.com"){
        this.administrador=true;
      }
    },*/
      abrirSesionCorreo(){
        autentificacion.loginCorreo(this.correo1, this.contra1)
        this.correo1='';
        this.contra1='';
      },
 
      abrirSesionGoogle(){
        autentificacion.loginGoogle();
      },
      abrirSesionFacebook(){
        autentificacion.loginFacebook();
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
  justify-content: space-around ;
}

form{
  display: flex;
  flex-direction: column;
  
}
form input, p{
  margin: 0.2rem
}
button{
  margin:.2rem;
}
</style>