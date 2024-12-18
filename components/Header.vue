<template>
    <header class="bg-white py-5">
        <Container>
            <div class="flex justify-between items-center px-4">
                <div class="flex gap-4 items-center">
                    <NuxtLink to="/">
                        <Logo />
                    </NuxtLink>
                
                        <Searchbar />
    
                </div>
    
                <div class="flex gap-6 items-center">
                    <NuxtLink class="font-semibold text-gray-900 hidden md:block">
                        Login
                    </NuxtLink>    

                    <NuxtLink class="font-semibold text-gray-900 hidden md:block">
                        Sign Up
                    </NuxtLink>
                    <!-- <p class="font-semibold text-md text-gray-900">For business</p> -->
    
                    <!-- Icon photo -->
                    <Avatar />
    
                    <Menu />
                </div>
    
    
            </div>
        </Container>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>