<script setup>
import {useCounterStore} from "../stores/counter"
</script>





<template>
  <div class="about2">
    <p>Esto es el contador</p>
    <h1>{{useCounterStore().count}}</h1>
    <p>Esto seria el doble del contador {{ useCounterStore().doubleCount}}</p>
    <button @click="useCounterStore().increment">Sumar 1 a la cuenta y Multiplicar *2</button>
    <br>



   
 


  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about2 {
    font-size: 30px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
