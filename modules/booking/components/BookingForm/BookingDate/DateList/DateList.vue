<template>
    <div class="p-4">
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4"> 
            <DateItem v-for="date in getDates()" :key="date.getDate()" :date="date" />   
        </div>
    </div>
</template>

<script setup lang="ts">
import DateItem from './DateItem.vue';


const getDates = () => {
    let dates = [] 
    for (let i = 0; i < 9; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i)    
        dates.push(date)
    }
    
    return dates;    
}


</script>

<style scoped>

</style> 