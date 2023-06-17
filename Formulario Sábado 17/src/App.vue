<template>
  <form class="my-form" @submit.prevent="Enviar">
    <label for="name">Nombre:</label>
    <input type="text" id="name" v-model="formValues.Name" />
    
    <label for="age">Edad:</label>
    <input type="number" id="age" v-model="formValues.age" />
    
    <label for="dob">Fecha de nacimiento:</label>
    <input type="date" id="dob" v-model="formValues.dob" />
    
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const formValues = reactive({
      Name: "",
      age: "",
      dob: ""
    });

    const Enviar = () => {
      alert(`
        Formulario recibido
        Name: ${formValues.Name}
        age: ${formValues.age}
        dob: ${formValues.dob}
      `);
    };

    return {
      formValues,
      Enviar
    };
  }
};
</script>



<style scoped>
.my-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

.my-form label {
  margin-bottom: 8px;
}

.my-form input {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 12px;
}

.my-form button {
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.my-form button:hover {
  background-color: #45a049;
}
</style>