<script setup>
import { defineProps } from 'vue'
defineProps({ isFlipped: Boolean })
defineEmits(['flip', 'unflip'])
</script>

<template>
  <div v-if="isFlipped" @click="$emit('unflip')">front</div>
  <div v-else @click="$emit('flip')">back</div>
</template>

<style scoped>
div {
  width: 10vw;
  height: 10vh;
  border-radius: 1rem;
  background-color: bisque;
  color: black;
}
</style>
