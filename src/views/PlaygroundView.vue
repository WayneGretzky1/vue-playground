<script setup>
import { ref, defineProps } from 'vue'
import EditableSpan from '../components/EditableSpan.vue'
import FlipCard from '../components/FlippyCard.vue'

const name = ref('Brock')
const whichFlipped = ref(-1)
</script>

<template>
  <main>
    <EditableSpan :value="name" @input="(val) => (name = val)" />
    <FlipCard :isFlipped="whichFlipped == 0" @flip="whichFlipped = 0" @unflip="whichFlipped = -1">
    </FlipCard>

    <FlipCard :isFlipped="whichFlipped == 1" @flip="whichFlipped = 1" @unflip="whichFlipped = -1">
    </FlipCard>

    <FlipCard :isFlipped="whichFlipped == 2" @flip="whichFlipped = 2" @unflip="whichFlipped = -1">
    </FlipCard>

    <FlipCard :isFlipped="whichFlipped == 3" @flip="whichFlipped = 3" @unflip="whichFlipped = -1">
    </FlipCard>
  </main>
</template>
