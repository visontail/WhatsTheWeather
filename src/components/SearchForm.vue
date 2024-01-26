<template>
    <div id="search-box">
        <input v-model="city" placeholder="Enter city" />
        <button id="search" @click="search">Search</button>
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
  
<style scoped>

</style>