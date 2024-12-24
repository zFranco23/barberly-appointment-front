<template>
    <div class="flex flex-col gap-2 h-full">
        <Gallery />
        <BarbershopList />
    </div>
</template>

<script setup lang="ts">
    import Gallery from '@/modules/home/components/Gallery/Gallery.vue';
    import BarbershopList from '../components/BarbershopList/BarbershopList.vue';
</script>

