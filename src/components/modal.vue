<template>
  <div class="contenido">
    <div>
    <h3 v-if="!authenticated">Inicia sesion aqui</h3>
     <button v-if="!authenticated" @click="abrirSesionGoogle">Login con Google</button>
     <button v-if="!authenticated" @click="abrirSesionFacebook">Login con Facebook</button>
     </div>
    <div>
    <form v-if="!authenticated">
      <h3>Inicia sesion aqui</h3>
      <p>Introduzca aqui su correo</p>
      <input type="text"  v-model="correoinicio">
      <p>Introduzca aqui su contraseña</p>
      <input type="password" v-model="contrainicio">
      <input @click="abrirSesionCorreo" type="submit">
    </form>


    <form v-if="!authenticated">
          <h3>Registrate aqui</h3>
      <p>Introduzca aqui su correo</p>
      <input type="text"  v-model="correocreacion">
      <p>Introduzca aqui su contraseña</p>
      <input type="password" v-model="contracreacion">
      <input @click="crearSesionCorreo" type="submit">
    </form>
    </div>
  </div>


</template>
<script>
import autentificacion from '../db'
export default{

    data() {
        return {
          correoinicio: '',
          contrainicio:'',
          correocreacion:'',
          contracreacion:'',
          administrador:false,
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
                 if(autentificacion.esAdmin(user)){
                this.$router.push('admin');
                 }
                 else{
                   this.$router.push('contenido')
                 }
          }
          else {
            this.user.loggedIn = false;
            this.user.data = {};

          }
        })
    },

    methods:{
 
        crearSesionCorreo(){
        autentificacion.crearUsuario(this.correocreacion, this.contracreacion)
        this.correoinicio='';
        this.contrainicio='';
      },

      abrirSesionCorreo(){
        autentificacion.loginCorreo(this.correoinicio, this.contrainicio)
        this.correoinicio='';
        this.contrainicio='';


  
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