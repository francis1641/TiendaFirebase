<template>
  <div id="app">
    <navbar/>
    <contenido/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import contenido from './components/contenido.vue'

export default {
  name: 'App',
  components: {
    navbar,
    contenido
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
