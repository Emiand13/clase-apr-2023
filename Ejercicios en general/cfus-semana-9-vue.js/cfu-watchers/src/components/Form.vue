<script setup>
import { ref, watch } from 'vue';

 const inputValue = ref('');

watch(inputValue, (newVal) => {
  console.log('Nuevo valor de inputValue:', newVal);
});

const resetInput = () => {
  inputValue.value = '';
};
</script>

<template>
  <div>
    <input type="text" class="input" v-model="inputValue" />
    <button class="button" @click="resetInput">Resetear</button>
  </div>
</template>



<style scoped>
.button{
    background-color: rgb(30, 255, 0);
    height: 32px;
    border-radius: 8px;
  
}

.input{
height: 32px;


}
</style>

