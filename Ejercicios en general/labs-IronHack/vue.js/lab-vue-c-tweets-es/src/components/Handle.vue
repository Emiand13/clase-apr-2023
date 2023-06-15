<template>
  <div class="handle">{{ userData.handle }}</div> 
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  defineProps({
    handle: {
      type: String,
      required: true
    }
  });
  </script>