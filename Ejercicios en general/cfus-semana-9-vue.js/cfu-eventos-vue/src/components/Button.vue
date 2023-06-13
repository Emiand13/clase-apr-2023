<script setup>
const showAlert = (event) => {
  if (event) {
    alert(event.target.innerHTML);
  }
};
</script>
<template>
    <button @click="showAlert">Mostrar alerta!!!</button>
  </template>