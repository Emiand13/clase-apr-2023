<script setup>
const props = defineProps({
  name: String,
  bgColor: String,
});
</script>
<template>
    <button class="btn" :style="{ backgroundColor: bgColor }">{{ name }}</button>
  </template>
