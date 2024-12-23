<template>
    <div v-if="status === 'pending' && !data">
        Loading....
    </div>
    <div v-else-if="data" class="flex flex-col gap-6 my-4">
        <BarbershopInfo v-for="barbershop in data" :key="barbershop.id" :barbershop="barbershop" />
    </div>
    <div v-else>
        <p>There is no barbershops available</p>
    </div>
</template>

<script setup lang="ts">
import type { Barbershop } from '~/interfaces/barbershop';
import BarbershopInfo from '../BarbershopInfo/BarbershopInfo.vue';



const { data, status, error, refresh, clear } = useFetch<Barbershop[]>('http://localhost:5000/api/barbershops');


    

</script>

<style lang="scss" scoped>

</style>