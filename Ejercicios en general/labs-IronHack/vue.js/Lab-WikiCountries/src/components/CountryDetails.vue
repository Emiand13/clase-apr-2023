<template>
  <div class="container">
    <div class="countries-wrapper">
      <div v-if="country" class="countries-list col-7">
        <img :src="country.image" alt="Bandera del país" style="width: 300px" />
        <h1>{{ country.name }}</h1>
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
                  <li v-for="border in country.borders" :key="border">
                    <router-link :to="`/list/${border}`">{{
                      getCountryName(border)
                    }}</router-link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const alpha3Code = ref(route.params.alpha3Code);

const countries = reactive([
  {
    alpha3Code: "ABW",
    name: "Aruba",
    descripcion:
      "Aruba es un estado insular de las Antillas Menores en el Caribe Sur y se encuentra a unos 27 km al norte de Venezuela. El estado enano tiene un área total de solo 179 km² y una costa total de 69 km. Esta área es aproximadamente el 5,3 del tamaño de la ciudad de Manhattan.",
    area: "179",
    image: "https://flagcdn.com/w160/aw.png",
    borders: ["VNZ"],
    // Otros detalles del país
  },
  {
    alpha3Code: "AFG",
    name: "Afghanistan",
    descripcion:
      'Afganistán significa la tierra de los afganos. El término "stan" también se usa en varios países de Asia. La situación geográfica de Afganistán lo ha convertido en lugar de encuentro de imperios y civilizaciones, así como espacio de intercambio y comunicación de importantes polos culturales y comerciales, entre ellos destaca la ruta de la seda.',
    area: "652860",
    image: "https://flagcdn.com/w160/af.png",
    borders: ["ABW", "AGO"],
    // Otros detalles del país
  },
  {
    alpha3Code: "AGO",
    name: "Angola",
    descripcion:
      "Angola es un país de la región centroafricana. Es un territorio populoso, hogar de casi 34 millones de personas. Tiene al petróleo como base de su economía.",
    area: "1,246,700",
    image: "https://flagcdn.com/w160/ao.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "AIA",
    name: "Anguilla",
    descripcion:
      "Anguilla es un territorio británico de ultramar localizado en el Caribe, específicamente en el extremo norte de las islas de Barlovento, en las Antillas Menores. Es uno de los 17 territorios no autónomos bajo supervisión del Comité de Descolonización de las Naciones Unidas, con el fin de eliminar el colonialismo ​ Su capital es El Valle. El archipiélago comprende la isla de Anguila y algunos islotes cercanos y posee fronteras marítimas con la isla de San Martín al sudeste. Al oeste se encuentran las Islas Vírgenes Británicas.​",
    area: "102",
    image: "https://flagcdn.com/w160/ai.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ALA",
    name: "Åland Islands",
    descripcion:
      "Åland Islands es un archipiélago y provincia autónoma de Finlandia situado en el mar Báltico, entre Suecia y Finlandia continental. La población de las islas era de 28 983 habitantes el 31 de diciembre de 2015,5​ de los cuales 11 461 (39 %) vivían en la capital, Mariehamn (en finés, Maarianhamina). ",
    area: "	1552",
    image: "https://flagcdn.com/w160/ax.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ALB",
    name: "Albania",
    capital:"Tirana",
    descripcion:
      "Albania es un país del sudeste de Europa . El país está ubicado en los Balcanes en los mares Adriático y Jónico dentro delMar Mediterráneo y comparte fronteras terrestres con Montenegro al noroeste, Kosovo al noreste, Macedonia del Norte al este y Grecia al sur.",
    area: "28.748",
    image: "https://flagcdn.com/w160/al.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "AND",
    name: "Andorra",
    capital: "Andorra la vella",
    descripcion:
      "Andorra, oficialmente Principado de Andorra (en catalán, Principat d'Andorra ), es un micro-Estado soberano sin litoral ubicado en el suroeste de Europa, entre España y Francia, en el límite de la península ibérica. Se constituye en Estado independiente, de derecho, democrático y social, cuya forma de gobierno es el coprincipado parlamentario.",
    area: "470",
    image: "https://flagcdn.com/w160/ad.png",
    borders: ["FRA", "ESP", "ITA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ARE",
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    descripcion:
      "Angola Los Emiratos Árabes Unidos (EAU) es una federación de siete emiratos. Se encuentra en el lado este de la Península Arábiga y tiene costas a lo largo del Golfo de Omán y el Golfo Pérsico. Comparte fronteras con Arabia Saudita y Omán y se encuentra cerca del país de Qatar. Los EAU se formaron originalmente en 1971. Abu Dhabi es la capital de los EAU.",
    area: "82,880",
    image: "https://flagcdn.com/w160/ae.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ARG",
    name: "Argentina",
    capital: "Buenos Aires",
    descripcion:
      "Argentina es un país ubicado principalmente en la mitad sur de América del Sur. Compartiendo la mayor parte del Cono Sur con Chile al oeste, el país también limita con Bolivia y Paraguay al norte, Brasil al noreste, Uruguay y el Océano Atlántico Sur al este, y el Pasaje Drake al sur. Con una superficie continental de 2.780.400 km (1.073.500 millas cuadradas), Argentina es el octavo país más grande del mundo, el cuarto más grande de América, el segundo más grande de América del Sur después de Brasil, y la mayor nación de habla hispana.",
    area: "2,780,400",
    image: "https://flagcdn.com/w160/ar.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ARM",
    name: "Armenia",
    capital:"Yerevan",
    descripcion:
      "Armenia, oficialmente la República de Armenia, es un país sin salida al mar en las tierras altas armenias de Asia occidental. Es parte de la región del Cáucaso y limita con Turquía al oeste, Georgia al norte, el corredor de Lachin (bajo una fuerza de mantenimiento de la paz rusa) y Azerbaiyán al este, e Irán y el enclave azerbaiyano de Nakhchivan al sur. Ereván es la capital, la ciudad más grande y el centro financiero.",
    area: "29,743",
    image: "https://flagcdn.com/w160/am.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ASM",
    name: "American Samoa",
    capital:"Pago Pago",
    descripcion:
      "Samoa Americana , es un territorio no incorporado de Estados Unidos ubicado al oeste de las Islas Cook, al norte de Tonga y al sur de Tokelau y Océano Pacífico, es frecuentemente golpeada por tifones entre diciembre y es uno de los 17 territorios no autónomos bajo supervisión del Comité de Descolonización de las Naciones Unidas.",
    area: "199",
    image: "https://flagcdn.com/w160/as.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ATA",
    name: "Antarctica",
    capital:"La Antártida no es un país, sino una colección de reclamos territoriales de varios otros países.",
    descripcion:
      "Antarctica , es el continente más austral y menos poblado de la Tierra . Situado casi en su totalidad al sur del círculo polar antártico y rodeado por el océano Antártico (también conocido como el océano Antártico), contiene el Polo Sur geográfico.",
    area: "14,200,000",
    image: "https://flagcdn.com/w160/aq.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "FLK",
    name: "Falkland Islands",
    capital:"Stanley",
    descripcion:
      "Las Islas Malvinas son un archipiélago de 778 islas con una superficie terrestre de 4.700 millas cuadradas (12.000 km 2). El archipiélago consta de dos islas principales, West Falkland y East Falkland, que representan el 91% de la superficie terrestre. La costa de las Islas Malvinas se estima en 800 millas (1300 km).",
    area: "12,000",
    image: "https://flagcdn.com/w160/fk.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "FRA",
    name: "France",
    capital:"Paris",
    descripcion:
      "Francia es un país soberano que se extiende por Europa Occidental y por regiones y territorios de ultramar en América y los océanos Atlántico, Pacífico e Índico. La capital del país es París, una de las ciudades más turísticas del mundo, que está atravesada por el río Sena.",
    area: "640,679",
    image: "https://flagcdn.com/w160/fr.png",
    borders: ["ESP", "AND", "ITA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ZWE",
    name: "Zimbabwe",
    capital:"Paris",
    descripcion:
      "Zimbabue es un país africano, rodeado por Sudáfrica, Botsuana, Zambia y Mozambique. En la frontera noroeste está el río Zambeze donde se encuentran las cataratas Victoria, que es un destino popular para los turistas. Al sur limitando con Sudáfrica se encuentran el río Limpopo.",
    area: "386,850",
    image: "https://flagcdn.com/w160/zw.png",
    borders: ["AIA", "ALA"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ESP",
    name: "España",
    capital:"Madrid",
    descripcion:
      "España o Reino de España es un país situado en el sur de Europa occidental y norte de África, que está compuesto por comunidades autónomas y es miembro de la Unión Europea.",
    area: "505.990",
    image: "https://flagcdn.com/w160/es.png",
    borders: ["FRA", "ITA", "AND"],

    // Otros detalles del país
  },
  {
    alpha3Code: "ITA",
    name: "Italia",
    descripcion:
      " Italia es un país soberano transcontinental, miembro y fundador de la Unión Europea, constituido en una república parlamentaria compuesta por veinte regiones, integradas estas, a su vez, por ciento once provincias.",
    area: "301,340",
    image: "https://flagcdn.com/w160/it.png",
    borders: ["FRA", "ESP",],

    // Otros detalles del país
  },
  {
    alpha3Code: "VNZ",
    name: "Venezuela",
    descripcion:
      "Venezuela es un país ubicado en el extremo norte de América del Sur. Limita con el Mar Caribe y el Océano Atlántico al norte, Guyana al este, Brasil al sur y Colombia al suroeste y al oeste. Venezuela ocupa un área aproximadamente triangular que es más grande que las áreas combinadas de Francia y Alemania. El nombre oficial de Venezuela es República Bolivariana de Venezuela.",
    area: "912.050",
    image: "https://flagcdn.com/w160/ve.png",
    borders: ["FRA", "ESP",],

    // Otros detalles del país
  },










  // Otros países
]);
const country = ref(null);

const updateCountry = () => {
  country.value = countries.find((c) => c.alpha3Code === alpha3Code.value);
};

onMounted(() => {
  updateCountry();
});

watch(
  () => route.params.alpha3Code,
  () => {
    alpha3Code.value = route.params.alpha3Code;
    updateCountry();
  }
);

function getCountryName(alpha3Code) {
  const country = countries.find((c) => c.alpha3Code === alpha3Code);
  return country ? country.name : "";
}
</script>


<style scoped>
</style>
  