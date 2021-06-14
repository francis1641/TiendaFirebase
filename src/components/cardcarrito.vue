<template>
    <div class="card">
          <h3>{{ carritoart.nameArticulo }}</h3>
        <p class="">El precio es {{carritoart.Precio}}</p>
        <p class="">Hay {{carritoart.Cantidad}} unidades</p>
        <button @click="eliminarCarrito">Eliminar producto</button>                  
    </div>

</template>

<script>
import { db } from '../db'
export default {

    name: 'carrito',
    props: ['carritoart', 'carritoartid'],
    data() {
        return {
            id: this.carritoartid,
        }
    },
    methods:{

        editCarrito(){
            db.collection("Games").doc("this.num").set({
                nameArticulo: this.carritoart.Nombre,
                Precio: this.carritoart.Precio,
                Cantidad: this.carritoart.cantidad,
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
            this.num++;
        },

        eliminarCarrito(){
            console.log("El id es "+this.id)
            db.collection("Carrito").doc(this.id).delete().then(() => {
                this.$notify({
                    group: 'eliminar',
                    type: 'warn',
                    width:'300px',
                    title: 'Important message',
                    text: '¡Articulo eliminado del carrito!'
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