<script setup>
import EditableSpan from '../components/EditableSpan.vue'
import ButtonCounter from '../components/ButtonCounter.vue'
import LoginButton from '../components/LoginButton.vue'

import { ref } from 'vue'
const name = ref('Brock')
</script>

<template>
  <main>
    <EditableSpan :value="name" @input="(val) => (name = val)" />
    <ButtonCounter />
    <LoginButton />
  </main>
</template>
