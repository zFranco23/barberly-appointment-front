<template>
    <button class="md:hidden" @click="toggleSidebar">
        <Icon name="mdi:menu" size="24" />
    </button>
    <div :class="`fixed w-full h-full transition-all ease-in-out duration-300 md:w-96 top-0 ${isOpen ? 'right-0': '-right-full'} bg-gray-200`">   
       <div class="h-full p-6">
            <div class="flex items-center justify-between">   
                <p>Barberly</p>

                <button @click="toggleSidebar">
                    <Icon name="mdi:close" size="24" />
                </button>

            </div>

            <div class="flex flex-col items-center justify-center h-full">
                <NuxtLink to="/" @click.native="toggleSidebar">
                    Home
                </NuxtLink>

                
            </div>

       </div>
    </div>
</template>

<script setup lang="ts">

    const isOpen = ref<boolean>(false)

    const toggleSidebar = () => isOpen.value = !isOpen.value

</script>



