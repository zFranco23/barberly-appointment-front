<template>
    <div class="flex gap-4 items-center">
        <p v-if="isAlreadyInAttention" class="text-gray-900">
            <span class="text-primary">Open</span>&nbsp; at {{ formatDateToHours(startHour) }}
        </p>

        <p v-else class="text-gray-900">
            <span class="text-secondary">Closed</span>&nbsp; opens soon at {{ formatDateToHours(startHour) }}
        </p>

        <p class="text-gray-900">
            MG Road, Bangalore
        </p>
        
    </div>
</template>

<script setup lang="ts">
 
const {startHour, endHour} = defineProps<{ startHour: string, endHour: string}>();


const isAlreadyInAttention =  new Date().getHours() >= new Date(startHour).getHours() && new Date().getHours() <= new Date(endHour).getHours();


</script>

<style scoped>
</style>