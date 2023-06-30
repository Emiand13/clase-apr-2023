<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

</script>

<template>
  <div class="app">
    <NavBar />
    <CountriesList />

    <RouterView />
  </div>
</template>