import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const countTwo = ref(0);

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }


  const favoriteBand = ref('Eminem');
  const bioBand = ref('Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time. Eminem global success and acclaimed works are widely regarded as having broken racial barriers for the acceptance of white rappers in popular music. While much of his transgressive work during the late 1990s and early 2000s made him widely controversial, he came to be a representation of popular angst of the American underclass and has been cited as an influence for many artists of various genres');
 



  return { count, doubleCount, increment, favoriteBand ,bioBand, city, cityBio}
})
