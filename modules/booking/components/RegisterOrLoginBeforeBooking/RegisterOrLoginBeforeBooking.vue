<template>
    <div>
        <RegisterForm v-if="type === 'register'" @change-type="handleChangeType"  /> 
        <LoginForm v-else @change-type="handleChangeType" />
    </div>
</template>

<script setup lang="ts">
import LoginForm from './Form/LoginForm/LoginForm.vue';
import RegisterForm from './Form/RegisterForm/RegisterForm.vue';


const type = ref<string>('register');


const handleChangeType = () => {
    type.value = type.value === 'register' ? 'login' : 'register';
}
</script>

<style lang="scss" scoped>

</style>