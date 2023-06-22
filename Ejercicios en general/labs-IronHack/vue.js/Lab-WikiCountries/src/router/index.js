import { createRouter, createWebHistory } from 'vue-router';
import CountriesList from '../components/CountriesList.vue';
import CountryDetails from '../components/CountryDetails.vue';

const routes = [
  {
    path: '/',
    name: 'list',
    components: {
      default: CountriesList,
      details: CountryDetails,
    },
  },
  {
    path: '/list/:alpha3Code',
    name: 'details',
    components: {
      default: CountriesList,
      details: CountryDetails,
    },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


