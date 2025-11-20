<script>
const provider = new GoogleAuthProvider()
</script>

<script setup>
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const user = useCurrentUser()
const auth = useFirebaseAuth()

async function login() {
  try {
    const result = await signInWithPopup(auth, provider)
  } catch {
    alert('oh no')
  }
}

async function logout() {
  try {
    const result = await signOut(auth)
  } catch {
    alert('oh no')
  }
}
</script>

<template>
  <main>
    <div>user is {{ user }}</div>
    <button @click="login">log in</button>
    <button @click="logout">log out</button>

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
