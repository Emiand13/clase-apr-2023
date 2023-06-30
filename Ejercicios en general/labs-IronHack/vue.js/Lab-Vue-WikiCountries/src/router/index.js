import { createRouter, createWebHistory } from 'vue-router';
import CountriesList from '../components/CountriesList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CountriesList,
  },
  {
    path: '/country/:alpha3Code',
    name: 'country',
    component: CountriesList,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
