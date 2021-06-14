<template>
    <div class="card">
          <h3>{{ juego.Nombre }}</h3>
          <img v-bind:src="juego.Imagen">
        <p class="">{{juego.Descripcion}}</p>
        <p class="">El precio es {{juego.Precio}}</p>
        <p class="">Hay {{juego.Stock}} unidades</p>
        <button @click="updateArticulos">Editar Datos</button>
        <button @click="deleteArticulos">Eliminar productos</button>
    </div>

</template>

<script>
import { db } from '../db'
export default {
    name: 'admin',   
    props: ['juego', 'juegoid'],
    data(){
        return{
            id: this.juegoid
        }
    },
    methods:{

        updateArticulos(){
            var articulo = db.collection("Games").doc();
            return articulo.update({
                Cantidad: 5,
                Stock: 20
            })
            .then(() => {
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
        },

        deleteArticulos(){
            db.collection("Games").doc(this.id).delete().then(() => {
                this.$notify({
                    group: 'eliminar',
                    title: 'Important message',
                    text: 'Document successfully deleted!'
                    });
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
    },


}
</script>

<style scoped>
.card{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 33.33%;
    background-color: rgba(0, 0, 0, 0.685);
    color: blanchedalmond;
    padding: 1.2rem;
    margin: 0.2rem;
}

</style>