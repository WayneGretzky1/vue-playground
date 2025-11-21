<script>
const provider = new GoogleAuthProvider()
</script>

<script setup>
import { ref, defineProps } from 'vue'
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const user = useCurrentUser()
const auth = useFirebaseAuth()

defineProps({ isLoggedIn: Boolean })
const emit = defineEmits(['signIn', 'signOut'])

async function login() {
  try {
    const result = await signInWithPopup(auth, provider)
    emit('signOut')
  } catch {
    alert('oh no')
  }
}

async function logout() {
  try {
    const result = await signOut(auth)
    emit('signIn')
  } catch {
    alert('oh no')
  }
}
</script>

<template>
  <main>
    <div>user is {{ user }}</div>
    <button v-if="isLoggedIn" @click="login">log in</button>
    <button v-else @click="logout">log out</button>
  </main>
</template>
