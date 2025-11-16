// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-43WOSYPySLcJu4SJd-6ufGuJ8tLynKw',
  authDomain: 'vue-playground-48283.firebaseapp.com',
  projectId: 'vue-playground-48283',
  storageBucket: 'vue-playground-48283.firebasestorage.app',
  messagingSenderId: '24532168476',
  appId: '1:24532168476:web:ecd22ef784fb01aeac94d9',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export { firebaseApp }
