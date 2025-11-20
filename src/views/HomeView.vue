<script setup>
import LoginButton from '../components/LoginButton.vue'

import { computed, onMounted, ref, watchEffect } from 'vue'
import { useCollection, useDocument } from 'vuefire'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebase_conf'

const cards = ref([])

async function loadDeck(deckId) {
  const deckRef = doc(db, 'decks', deckId)
  const cardsRef = collection(deckRef, 'cards')
  const snapshot = await getDocs(cardsRef)

  cards.value = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}

onMounted(() => {
  loadDeck('3WiXTZtGOPp4WYKBX3d4')
})

watchEffect(() => {
  // console.log('something')
  // console.log('users', test.value)
})
// console.log('test', test.value)
</script>

<template>
  <main>
    <LoginButton />
    <ul>
      <li v-for="card in cards" :key="card.id">
        <card>{{ card.rank }} of {{ card.suit }}</card>
      </li>
    </ul>
  </main>
</template>

<style scoped>
card {
  width: 100px;
  height: 100px;
  background-color: bisque;
  color: black;
}
</style>
