<template>
    <div id="search-box">
        <input v-model="city" placeholder="Enter city" />
        <button id="search" @click="search"><img id="search-img" src="@/assets/search.svg"></button>
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

input, 
button {
    padding: 0.8rem;
    border-radius: 14px;
    border: 1px solid #31304D;
}
input {
    background-color: #F0ECE5;
    cursor: pointer;
}

#search {
    background-color: #F0ECE5;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
    width: 42px;
    height: 32px;
    display: flex;
    align-items: center;
}

#search-img {
    width: 20px;
    height: 20px;
}

#search:hover {
    background-color: #B6BBC4;
}
</style>