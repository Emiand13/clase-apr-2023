<template>
    <div>

        <h1>{{ city }}</h1>
      <h2>Fundada hace {{ dateFoundation.years }} años en el {{ dateFoundation.date }}.</h2>
      
      <img src="https://th.bing.com/th/id/OIP.EYvr75xtjhzsISJP9aqUsAHaE7?pid=ImgDet&rs=1" alt="imagen sant boi">
      <p>{{ cityBio }}</p>
      <h2>Año fundación mutiplicado por 4: {{ calcularAnioFundacionMultiplicado }}</h2>
      <button @click="sumarDosAnios">Sumar 2 años a los años que hace que se fundo</button>
      <button @click="multiplicarAnioFundacion">Multiplicar por 4</button>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed } from 'vue';
  
  const dateFoundation = reactive({
    years: 88,
    date: 1935
  });
  
  const city = ref('Sant boi de Llobregat');
  const cityBio = ref('San Baudilio de Llobregat (oficialmente en catalán Sant Boi de Llobregat) es un municipio español de la provincia de Barcelona, en la comunidad autónoma de Cataluña. Ubicado en el área metropolitana de Barcelona, en la comarca de Bajo Llobregat, su población es de 83.371 habitantes');
  
  function sumarDosAnios() {
    dateFoundation.years += 2;
  }
  
  function multiplicarAnioFundacion() {
    dateFoundation.date *= 4;
  }
  
  const calcularAnioFundacionMultiplicado = computed(() => {
    return dateFoundation.date;
  });
  </script>
  
  