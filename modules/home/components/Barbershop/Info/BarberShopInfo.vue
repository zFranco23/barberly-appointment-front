
<template>
  <div class="p-4">
    <div class="grid lg:grid-cols-3 gap-4">
      <div class="flex baseline gap-4 text-gray-900">
        <div>
            <Icon name="mdi:map-marker" size="24" />
        </div>
        <p>
          1st Floor, Icon Mall, 2981, 12th Main Rd, Indiranagar, Bengaluru,
          Karnataka 560008 Get directions
        </p>
      </div>

      <div class="flex baseline gap-4 text-gray-900">
        <div>
          <Icon name="mdi:clock-time-eight" size="24" />
        </div>
        <div class="flex baseline gap-6">
          <div>
            <p>Mon</p>
            <p>Tue - Sun</p>
          </div>

          <div>
            <p>Closed</p>
            <p>10:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>

      <div class="flex baseline gap-4 text-gray-900">
        <Icon name="mdi:credit-card" size="24" />
        <div>
          <p>Mode of payment</p>
          <p>Cash</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
