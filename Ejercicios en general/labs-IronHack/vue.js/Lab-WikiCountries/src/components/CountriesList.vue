<template>
  <div class="container">
    <div class="row">
      <div class="col-5" style="max-height: 150vh; overflow: scroll">
        <div class="list-group">
          <h2 class="lista">Lista de países</h2>
          <ul>
            <!-- Usamos la directiva "v-for" para recorrer la lista de countries y generar contenido dinamicamente en base a esos elementos -->
            <li
              v-for="country in countries"
              :key="country.alpha3Code"
              class="list-group-item list-group-item-action"
            >
              <div class="country-item">
                <img :src="country.image" />

                <!-- Usamos la directiva ":to" para crear los enlaces y en el valor establecemos "/list/" seguido de country concatenado con alpha3Code con las "template literals", para construir una ruta dinamicamente  -->
                <router-link
                  :to="`/list/${country.alpha3Code}`"
                  class="country-link"
                >
                  <span>{{ country.name }}</span>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-7">
        <!-- Detalles del país -->
        <!-- Pasamos el valor de la variable como una propiedad llamada "country" al componente "CountryDetails"  -->
        <CountryDetails :country="selectedCountry" />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, reactive } from "vue";
import CountryDetails from "./CountryDetails.vue";

const selectedCountry = ref(null);
const countries = reactive([
  {
    alpha3Code: "ABW",
    name: "Aruba",
    image: "https://flagpedia.net/data/flags/icon/72x54/aw.png",
  },
  {
    alpha3Code: "AFG",
    name: "Afghanistan",
    image: "https://flagpedia.net/data/flags/icon/72x54/af.png",
  },
  {
    alpha3Code: "AGO",
    name: "Angola",
    image: "https://flagpedia.net/data/flags/icon/72x54/ao.png",
  },
  {
    alpha3Code: "AIA",
    name: "Anguilla",
    image: "https://flagpedia.net/data/flags/icon/72x54/ai.png",
  },
  {
    alpha3Code: "ALA",
    name: "Åland Islands",
    image: "https://flagpedia.net/data/flags/icon/72x54/ax.png",
  },
  {
    alpha3Code: "ALB",
    name: "Albania",
    image: "https://flagpedia.net/data/flags/icon/72x54/al.png",
  },
  {
    alpha3Code: "AND",
    name: "Andorra",
    image: "https://flagpedia.net/data/flags/icon/72x54/ad.png",
  },
  {
    alpha3Code: "ARE",
    name: "United Arab Emirates",
    image: "https://flagpedia.net/data/flags/icon/72x54/ae.png",
  },
  {
    alpha3Code: "ARG",
    name: "Argentina",
    image: "https://flagpedia.net/data/flags/icon/72x54/ar.png",
  },
  {
    alpha3Code: "ARM",
    name: "Armenia",
    image: "https://flagpedia.net/data/flags/icon/72x54/am.png",
  },
  {
    alpha3Code: "ASM",
    name: "American Samoa",
    image: "https://flagpedia.net/data/flags/icon/72x54/as.png",
  },
  {
    alpha3Code: "ATA",
    name: "Antarctica",
    image: "https://flagpedia.net/data/flags/icon/72x54/aq.png",
  },
  {
    alpha3Code: "FLK",
    name: "Falkland Islands",
    image: "https://flagpedia.net/data/flags/icon/72x54/fk.png",
  },
  {
    alpha3Code: "FRA",
    name: "France",
    image: "https://flagpedia.net/data/flags/icon/72x54/fr.png",
  },
  {
    alpha3Code: "ZWE",
    name: "Zimbabwe",
    image: "https://flagpedia.net/data/flags/icon/72x54/zw.png",
  },
  {
    alpha3Code: "ESP",
    name: "España",
    image: "https://flagpedia.net/data/flags/icon/72x54/es.png",
  },
  {
    alpha3Code: "ITA",
    name: "Italia",
    image: "https://flagpedia.net/data/flags/icon/72x54/it.png",
  },
  {
    alpha3Code: "VNZ",
    name: "Venezuela",
    image: "https://flagpedia.net/data/flags/icon/72x54/ve.png",
  },
]);

// Utilizamos esta funcion para seleccionar un pais y actualizar la variable "selectedCountry" con el pais seleccionado.
function selectCountry(country) {
  selectedCountry.value = country;
}
</script>

  <style scoped>
.country-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.country-item img {
  margin-bottom: 5px;
}

.country-item a {
  text-decoration: none;
}

.lista{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
  