<template>
  <div class="container">
    <h1 class="titulo">Lista de Países</h1>
    <div class="row">
      <!-- Countries List -->
      <div class="col-5">
        <div class="list-group">
          <ul>
            <li
              v-for="country in sortedCountries"
              :key="country.alpha3Code"
              class="list-group-item list-group-item-action"
            >
              <router-link :to="{ name: 'country', params: { alpha3Code: country.alpha3Code } }">
                <div>
                  <img :src="getFlagImageUrl(country.alpha2Code)" :alt="country.name.common" />
                </div>
                {{ country.name.common }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Country Details -->
      <div class="col-7">
        <div v-if="selectedCountry">
          <img :src="getFlagImageUrl(selectedCountry.alpha2Code)" :alt="selectedCountry.name.common" />
          <h1>{{ selectedCountry.name.common }}</h1>
          <table class="table">
            <tbody>
              <tr>
                <td style="width: 30%">Capital</td>
                <td>{{ selectedCountry.capital }}</td>
              </tr>
              <tr>
                <td>Área</td>
                <td>{{ selectedCountry.area }} km<sup>2</sup></td>
              </tr>
              <tr>
                <td>Fronteras</td>
                <td>
                  <ul>
                    <li v-for="border in selectedCountry.borders" :key="border">
                      <router-link :to="{ name: 'country', params: { alpha3Code: border } }">{{ getCountryNameByAlpha3Code(border) }}</router-link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const countries = ref([]);
const route = useRoute();

// Función para obtener los datos de los países desde la API
const fetchCountries = async () => {
  try {
    const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
    const data = await response.json();
    countries.value = data;
  } catch (error) {
    console.error('Error al obtener los países:', error);
  }
};

onMounted(() => {
  fetchCountries(); // Llamada a la función al montar el componente
});

const sortedCountries = computed(() => {
  return countries.value.sort((a, b) => {
    const nameA = a.name && a.name.common ? a.name.common : '';
    const nameB = b.name && b.name.common ? b.name.common : '';
    return nameA.localeCompare(nameB);
  });
});

// Función para obtener la URL de la imagen de la bandera
const getFlagImageUrl = (alpha2Code) => {
  return `https://flagcdn.com/72x54/${alpha2Code?.toLowerCase()}.png`;
};

// Obtener el país seleccionado según el parámetro de ruta
const selectedCountry = computed(() => {
  const alpha3Code = route.params.alpha3Code;
  return countries.value.find((country) => country.alpha3Code === alpha3Code) || null;
});

// Función para obtener el nombre de un país por su código de tres letras (alpha3Code)
const getCountryNameByAlpha3Code = (alpha3Code) => {
  const country = countries.value.find((country) => country.alpha3Code === alpha3Code);
  return country ? country.name.common : '';
};
</script>

<style scoped>
.container {
  text-align: center;
}

.titulo {
  text-align: start;
  padding-left: 4em;
}
</style>
