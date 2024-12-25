<script setup lang="ts">
import BookingTitle from '../../BookingTitle/BookingTitle.vue';
import BookingDateSelection from './BookingDateSelection /BookingDateSelection.vue';
import DateList from './DateList/DateList.vue';

</script>

<template>
    <div>
        <BookingTitle>
            Select time
        </BookingTitle>

        <div class="bg-white rounded-lg">
            <DateList />
            <BookingDateSelection />
        </div>
    </div>
</template>

