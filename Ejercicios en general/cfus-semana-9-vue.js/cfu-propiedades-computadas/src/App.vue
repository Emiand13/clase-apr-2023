<script setup>
import { computed,ref } from 'vue'
const firstName = ref('Emilio')
const lastName = ref('Carrasco Gomez')

const fullName = computed(() => firstName.value + ' ' + lastName.value)
</script>


<template>
  <h1>Mi nombre es: {{ fullName }} </h1>
</template>