<script setup>
import FlipCard from '../components/FlippyCard.vue'
import { ref } from 'vue'
const whichFlipped = ref(-1)
</script>

<template>
  <main>
    <FlipCard
      :isFlipped="whichFlipped == 0"
      @flip="whichFlipped = 0"
      @unflip="whichFlipped = -1"
    ></FlipCard>
    <FlipCard
      :isFlipped="whichFlipped == 1"
      @flip="whichFlipped = 1"
      @unflip="whichFlipped = -1"
    ></FlipCard>
    <FlipCard
      :isFlipped="whichFlipped == 2"
      @flip="whichFlipped = 2"
      @unflip="whichFlipped = -1"
    ></FlipCard>
    <FlipCard
      :isFlipped="whichFlipped == 3"
      @flip="whichFlipped = 3"
      @unflip="whichFlipped = -1"
    ></FlipCard>
  </main>
</template>
