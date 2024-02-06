<template>
    <div class="search-container">
        <div class="search-box">
            <input class="search-input" v-model="city" placeholder="Another location" />
        </div>
        <button class="search-btn" @click="search"></button>
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
            if(this.city.trim() === '') {
                alert('Please enter a location.');
            }
            else {
                // Emit the search event with the city
                this.$emit('search', this.city);
                this.city = '';
            }
        },
        
    },
};
</script>
  
<style scoped>
.search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
}

.search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: 20px 40px 20px 0;
}

.search-input {
    width: 100%;
    height: 80px;
    border: none;
    font-size: 16px;
    background-color: rgba(255, 255, 255, 0.0);
    color: white;
    border-bottom: 1px solid  rgba(255, 255, 255, 0.4);
}
.search-input::placeholder {
    color: rgba(255, 255, 255, 0.6); 
    font-size: 14px;
    transform: translateY(8px);
    transition: color 0.3s ease, font-size 0.3s ease;
}
.search-input:hover::placeholder {
    color: #ffffff;
    font-size: 16px;
    transform: translateY(0);
}

.search-btn {
    width: 82px;
    height: 82px;
    border: none;
    cursor: pointer;
    background-image: url('@/assets/search.svg');
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: center;
}
.search-btn:hover {
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 1.5px rgba(77, 75, 75, 0.5);
    outline: 0;
    background-size: 45%;
    transition: background-size 0.2s ease-in-out;
}

.search-img {
    width: 40%;
    height: 40%;
}

</style>