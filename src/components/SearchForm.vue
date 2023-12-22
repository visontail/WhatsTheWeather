<template>
    <div>
      <input v-model="city" placeholder="Enter city" />
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        city: '',
      };
    },
    methods: {
      search() {
        // Emit the search event with the city
        this.$emit('search', this.city);
        this.city = '';
      },
    },
  };
  </script>
  