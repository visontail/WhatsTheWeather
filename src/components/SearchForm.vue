<template>
    <div id="search-container">
        <div id="search-box">
            <input id="search-input" v-model="city" placeholder="Another location" />
            <div id="white-line"></div>
        </div>
        <button id="search-btn" @click="search"></button>
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
    padding-left: 15px;
}
#search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 20px 40px 20px 0;
}
#search-input {
    width: 100%;
    height: 80px;
    border: none;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.0);
    color: white;
}
#search-input::placeholder {
    color: white;
}

#white-line {
    width: 100%;
    height: 1px;
    background-color: white;
}
#search-btn {
    width: 82px;
    height: 82px;
    border: none;
    cursor: pointer;
    background-image: url('@/assets/search.svg');
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: center;
}
#search-img {
    width: 40%;
    height: 40%;
}

</style>