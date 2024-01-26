<template>
    <div id="search-container">
        <div id="search-box">
            <input id="search-input" v-model="city" placeholder="Another location" />
            <div id="white-line"></div>
        </div>
        <button id="search-btn" @click="search"><img id="search-img" src="@/assets/search.svg"></button>
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
#search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}
#search-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 40px 20px 0;
}
#search-input {
    width: 200px;
    height: 80px;
    border: none;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.0);
}
#white-line {
    width: 100%;
    height: 1px;
    background-color: white;
}
#search-btn {
    width: 62px;
    height: 62px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
}
#search-img {
    width: 40%;
    height: 40%;
}

</style>