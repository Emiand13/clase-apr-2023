<template class="cuerpo">
  
<div class="container">
  

 
  <caption class="titulo">IronContacts</caption>

  <button @click="addRandomContact" :style="{ backgroundColor: buttonColor }" class="boton">
      Add Random Contact
    </button>


  


  <table>
  <thead>
   
    <tr>
      <th class="titulos-2">Picture</th>
      <th class="titulos-2">Name</th>
      <th class="titulos-2">Popularity</th>
      <th class="titulos-2">WonOscar</th>
      <th class="titulos-2">WonEmmy</th>
    </tr>

  </thead>
  

  <tbody>
    <tr v-for="contact in contacts" :key="contact.name">
      <td><img :src="contact.pictureUrl" alt="Foto de contacto" class="fotos"></td>
      <td v-html="contact.name" class="names"></td>
      <td v-html="contact.popularity" class="numbers"></td>
      <td class="oscar">
          <span v-if="contact.wonOscar" class="icono-grande">🏆</span>
          <span v-else>-</span>
        </td>
        <td class="emmy">
          <span v-if="contact.wonEmmy" class="icono-grande">🏆</span>
          <span v-else>-</span>
        </td>
    </tr>
    <!-- Repetir el patrón anterior para cada contacto -->
   
  </tbody>
</table>
</div>





</template>

<script setup>
import {ref,reactive} from 'vue'
// import contacts from "./contacts.json";





const contacts = reactive([

{
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713,
    "id": "11731993-0604-4bee-80d5-67ad845d0a38",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Johnny Depp",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    "popularity": 15.656534,
    "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Monica Bellucci",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    "popularity": 16.096436,
    "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Gal Gadot",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
    "popularity": 10.049256,
    "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Ian McKellen",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
    "popularity": 10.070132,
    "id": "0067ae32-97b6-4431-898e-eb1c10150abb",
    "wonOscar": false,
    "wonEmmy": false
  },

])

const remainingContacts = reactive([

{
    "name": "Matt Damon",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/elSlNgV8xVifsbHpFsqrPGxJToZ.jpg",
    "popularity": 9.500475,
    "id": "fd998a8f-1c9f-4ad8-8a03-45f93b630aa1",
    "wonOscar": true,
    "wonEmmy": false
  },
  {
    "name": "David Harbour",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/chPekukMF5SNnW6b22NbYPqAStr.jpg",
    "popularity": 9.47013,
    "id": "0df01b3e-9cb9-498a-91c2-25435fa3bfed",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Ansel Elgort",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/uQYUfGvOZkB5x25Z19UeyLABHmr.jpg",
    "popularity": 9.429994,
    "id": "09178713-ca9d-4657-a570-51d6f6459f57",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Maria Bello",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/tFkbad0JoWvYc6XYBITv6EfeLwR.jpg",
    "popularity": 9.209649,
    "id": "48094f0e-1d16-4825-aae6-4888c065c6d7",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Ryan Reynolds",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/h1co81QaT2nJA41Sb7eZwmWl1L2.jpg",
    "popularity": 9.457546,
    "id": "56792412-8fda-4e10-b5ec-9cade83b167d",
    "wonOscar": false,
    "wonEmmy": false
  },
]);

const buttonColor = ref('gold'); // Color inicial del botón

const addRandomContact = () => {
  if (remainingContacts.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1)[0];
    contacts.push(randomContact);
  }

  buttonColor.value = 'green'; // Cambiar el color del botón a verde

   // Restaurar el color del botón después de 1 segundo
   setTimeout(() => {
    buttonColor.value = 'gold'; // Color inicial del botón
  }, 800);
};





</script>

<style scoped>


.titulo{
display: flex;
justify-content: center;
font-family: Avenir, Helvetica, Arial, sans-serif;
font-size: 70px;
font-weight: bold;
}

.titulos-2{
font-family: Avenir, Helvetica, Arial, sans-serif;
font-size: 36px;
padding-right:  60px;
font-weight: bold;
}

.fotos{
width: 110px;
height: 150px;
border-radius: 20px;
border: 5px solid gold;
box-shadow: 2px 2px 0px 1px rgba(255, 0, 0, 0.652);
}


.names{
font-size: 28px;
text-align: start;
font-weight: bold;

}

.numbers{
font-size: 26px;
text-align: start;
font-weight: bold;
align-items: center;
padding-left: 20px;
}

.oscar{
text-align: center;

}
.emmy{
text-align: center;

}


.boton{
display: flex;
justify-content: center;
border:none;
font-size: 30px;
height: 40px;
width: 300px;
background-color:gold;
border-radius: 10px;
margin-bottom: 20px;

}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icono-grande{
  font-size: 32px;
}



</style>