<script setup lang="ts">
    type ButtonVariant = 'primary' | 'secondary'
    
    const props = withDefaults(defineProps<{
        variant?: ButtonVariant
    }>(), { 
        variant: 'primary'
    })

    const classes = computed(() => {
        return {
            'bg-primary text-white': props.variant === 'primary',
            'bg-gray-300 text-gray-700': props.variant === 'secondary',
        }
    })

</script>
<template>
    <button class="btn py-2 px-8 rounded-lg font-bold" :class="classes">
        <slot />
    </button>
</template>

