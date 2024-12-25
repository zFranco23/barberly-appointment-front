<template>
    <button class="border-gray-400 border rounded-lg p-1" :class="{
        'bg-secondary text-white border-none': isSelected
    }">
        <div class="flex flex-col gap-1 justify-center items-center">
            <p>{{ getDayNumberByNumber(date.getDay()) }}</p>
            <p>
            {{date.getDate()}}
            </p>
        </div>
    </button>
</template>

<script setup lang="ts">

defineProps<{
    date: Date
}>()

const isSelected = computed(() => {
    return false
})

</script>

<style lang="scss" scoped>

</style> 