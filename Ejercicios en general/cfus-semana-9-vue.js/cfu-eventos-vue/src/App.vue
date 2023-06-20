
<template>
  <button @click="sayHello">Bien hecho!!!</button>
  
  </template>
  
  <script setup>
    const sayHello=(event)=>{
       if (event) {
        alert(event.target.innerHTML)
      }
    }
  </script>






