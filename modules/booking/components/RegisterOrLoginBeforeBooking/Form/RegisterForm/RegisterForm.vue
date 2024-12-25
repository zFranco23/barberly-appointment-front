<template>
  <div>
    <BookingTitle> Create account to continue </BookingTitle>

    <div class="flex flex-col gap-4 rounded-lg p-4 bg-white py-4 px-50">
      <div class="mx-auto w-full md:max-w-[70%]">
          <div class="flex flex-col gap-1 items-center w-full">
            <Button class="w-full"> Sign up with email </Button>

            <div class="mt-4 flex flex-col gap-1 items-center">
                <p class="text-sm text-gray-500">Already have an account?</p>
                <button class="m-auto text-primary font-bold" @click="handleLogin">Log in now</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookingTitle from "../../../BookingTitle/BookingTitle.vue";

const emit = defineEmits<{
  (e: "change-type"): void;
}>();

const handleLogin = () => emit("change-type");
</script>

<style lang="scss" scoped></style>
