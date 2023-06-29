<template>
    <div class="about">
     <h1>{{ useCounterStore().favoriteBand }}</h1> 
    

      

<img v-if="imagenVisible" src="https://th.bing.com/th/id/R.054cbcf810a42becf6eaa1fc483556f2?rik=8mVfF3dvqUaFhw&riu=http%3a%2f%2fwww.eminemlab.com%2fimages%2feminem%2feminem_002.jpg&ehk=zEoxXEC3wAJeJvhSIJOeSefArvbMkB0cQ0xarEzisBs%3d&risl=&pid=ImgRaw&r=0" alt="Imagen" class="image">


<p>{{ useCounterStore().bioBand }}</p>


<button @click="mostrarImagen" class="button">Mostrar imagen</button>


    </div>
  </template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }
.image{
    margin-top: 1em;
    margin-bottom: 3em;
    box-shadow: 1px 1px 1px 1px black;
}

.button{
margin-top: 3em;
margin-bottom: 2em;
width: 150px;
height: 40px;
border-radius: 3px;
}
}
</style>
  

<script setup>
import { ref } from 'vue';
import {useCounterStore} from "../stores/counter"

const imagenVisible = ref(false);


const mostrarImagen = () => {
      imagenVisible.value = true;
    };


</script>

