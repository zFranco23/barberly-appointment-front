<template>
    <div>
        <BookingTitle>
           Log in to continue
        </BookingTitle>

        <div class="flex flex-col gap-1 items-center bg-white rounded-lg p-4">
            <p>Don't have an account?</p>
            <button class="m-auto text-primary" @click="handleRegister">
                Sign up now
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import BookingTitle from '../../../BookingTitle/BookingTitle.vue';


const emit = defineEmits<{
    (e: 'change-type'): void
}>()    

const handleRegister = () => emit('change-type')

</script>

<style scoped>

</style>