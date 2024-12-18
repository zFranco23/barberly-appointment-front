<template>
  <div class="relative">
    <div
      class="grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 md:grid-flow-col gap-4"
    >
      <div class="w-full rounded-xl md:row-span-4">
        <video
          src="/img/gallery/video.mp4"
          class="w-full h-full object-cover rounded-lg"
          autoplay
          muted
          loop
        />
      </div>
      <div class="w-full rounded-xl md:row-span-2 overflow-hidden">
        <Photo src="/img/gallery/image1.webp" />
      </div>
      <div class="w-full rounded-xl md:row-span-2 overflow-hidden">
        <Photo src="/img/gallery/image2.webp" />
      </div>
      <div class="w-full rounded-xl md:row-span-2 overflow-hidden" >
        <Photo src="/img/gallery/image3.webp" />
      </div>
      <div class="w-full rounded-xl md:row-span-2 overflow-hidden">
        <Photo src="/img/gallery/image4.webp" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HOME_DATA } from "@/data/home";
import Photo from "./Photo/Photo.vue";
</script>

<style scoped></style>
