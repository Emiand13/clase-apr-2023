<template>
    <div class="user">
      <div class="name">{{ userData.name }}</div>
     


    </div>
  </template>

  <script setup>
  import { defineProps } from 'vue';

  defineProps({
    userData: {
      type: Object,
      required: true
    },

  });
  </script>
