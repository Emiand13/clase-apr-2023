<template>
    <div v-if="country">
      <img :src="getFlagImageUrl(country.alpha2Code)" :alt="country.name.common" class="images"/>
      <h1>{{ country.name.common }}</h1>
      <!-- Mostrar los detalles del país -->
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style="width: 30%">Capital</td>
            <td>{{ country.capital }}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {{ country.area }} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li v-for="border in country.borders" :key="border">
                  <router-link :to="`/country/${border}`">{{ getCountryNameByAlpha3Code(border) }}</router-link>
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
  
  const countries = ref([]);
  const route = useRoute();
  
  // Obtén el país seleccionado según el código alpha3
  const country = computed(() => {
    const alpha3Code = route.params.alpha3Code;
    return countries.value.find((c) => c.alpha3Code === alpha3Code);
  });
  
  const getFlagImageUrl = (alpha2Code) => {
    return `https://flagcdn.com/72x54/${alpha2Code?.toLowerCase()}.png`;
  };
  
  const getCountryNameByAlpha3Code = (alpha3Code) => {
    const country = countries.value.find((c) => c.alpha3Code === alpha3Code);
    return country ? country.name.common : "";
  };
  
  // Obtén los datos de los países desde la API
  const fetchCountries = async () => {
    try {
      const response = await fetch("https://ih-countries-api.herokuapp.com/countries");
      const data = await response.json();
      countries.value = data;
    } catch (error) {
      console.error("Error al obtener los países:", error);
    }
  };
  
  fetchCountries();
  </script>
  
