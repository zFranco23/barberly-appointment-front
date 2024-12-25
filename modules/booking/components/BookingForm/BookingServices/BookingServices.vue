<template>
    <div>
        <BookingTitle>
            Select Services
        </BookingTitle>

        <ServicesList />

        <BookingServicesSelection />

    </div>
</template>

<script setup>
import BookingTitle from '../../BookingTitle/BookingTitle.vue';
import BookingServicesSelection from './BookingServicesSelection/BookingServicesSelection.vue';
import ServicesList from './ServicesList/ServicesList.vue';


</script>

<style lang="scss" scoped>

</style>