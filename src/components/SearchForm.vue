<template>
    <div id="search-box">
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
  
<style scoped>
#search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
}

input, button {
    padding: 0.8rem;
    border-radius: 14px;
    border: 1px solid #31304D;
    margin-right: 0.5rem;
}

input {
    background-color: #F0ECE5;
    cursor: pointer;
}

button:hover {
    background-color: #B6BBC4;
    cursor: pointer;
}
</style>