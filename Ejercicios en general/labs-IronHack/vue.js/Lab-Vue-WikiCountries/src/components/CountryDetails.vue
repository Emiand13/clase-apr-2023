<template>
  <!-- Este código renderiza la imagen de la bandera y el nombre del país solo si la variable country tiene un valor asignado. Esto asegura que estos elementos solo se muestren cuando se tiene la información de un país específico. -->
  <div v-if="country">
    <img
      :src="getFlagImageUrl(country.alpha2Code)"
      :alt="country.name.common"
      class="images"
    />
    <h1>{{ country.name.common }}</h1>
    <!-- Mostrar los detalles del país: capital, area y fronteras-->
    <table class="table">
      <thead></thead>
      <tbody>
        <tr>
          <td style="width: 30%">Capital</td>
          <td>{{ country.capital }}</td>
        </tr>
        <tr>
          <td>Area</td>
          <td>{{ country.area }} km<sup>2</sup></td>
        </tr>
        <tr>
          <td>Borders</td>
          <td>
            <ul>
              <!-- Este código genera una lista de enlaces que representan los países fronterizos de un país determinado. Al hacer clic en cualquiera de estos enlaces, se navegará a la página de detalles del país fronterizo correspondiente. -->
              <li v-for="border in country.borders" :key="border">
                <router-link :to="`/country/${border}`">{{
                  getCountryNameByAlpha3Code(border)
                }}</router-link>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

//Countries es una referencia reactiva utilizada para almacenar y rastrear los datos de los países, mientras que route es un objeto que proporciona información sobre la ruta actual del componente.
const countries = ref([]);
const route = useRoute();

//La variable computada country se encarga de encontrar el objeto del país correspondiente al código alpha3Code que se encuentra en la ruta actual. Esto permite obtener los datos del país específico que se está visualizando en el componente CountryDetails.
const country = computed(() => {
  const alpha3Code = route.params.alpha3Code;
  return countries.value.find((c) => c.alpha3Code === alpha3Code);
});

//la función getFlagImageUrl recibe el código alpha2Code de un país y retorna una URL de imagen de bandera en base a ese código, la URL se construye utilizando la sintaxis de plantillas de cadena de JavaScript para concatenar el código en la parte relevante de la URL y despues el método toLowerCase() se aplica al código para asegurarse de que esté en minúsculas.
const getFlagImageUrl = (alpha2Code) => {
  return `https://flagcdn.com/72x54/${alpha2Code?.toLowerCase()}.png`;
};

//Esta función busca el nombre común de un país a partir de su código alpha3Code dentro de la lista de países.
const getCountryNameByAlpha3Code = (alpha3Code) => {
  const country = countries.value.find((c) => c.alpha3Code === alpha3Code);
  return country ? country.name.common : "No se a encontrado el pais ";
};

// Este código realiza una solicitud a la API de países para obtener los datos y los guarda en una variable reactiva para su uso en el componente.
const fetchCountries = async () => {
  try {
    const response = await fetch(
      "https://ih-countries-api.herokuapp.com/countries"
    );
    const data = await response.json();
    countries.value = data;
  } catch (error) {
    console.error("Error al obtener los países:", error);
  }
};

fetchCountries();
</script>
  
