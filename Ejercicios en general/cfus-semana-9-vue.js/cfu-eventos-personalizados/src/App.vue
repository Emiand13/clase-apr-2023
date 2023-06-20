<script setup>
import { ref } from "vue";
import Modal from "./components/Modal.vue";
const isModalVisible = ref(true);
const showModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};
</script>
<template>
  <div class="container">
    <button @click="showModal">Show Modal</button>
    <Modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<style>
.container {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
.modal {
  height: 400px;
  width: 400px;
  display: grid;
  justify-content: center;
  align-items: center;
  background: lightgray;
}
</style>