import { defineStore } from 'pinia'
import {
    auth,
    provider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from '@/includes/firebase.config.js'

export default defineStore('user', {
    state: () => ({
        loggedIn: false,
    }),
    actions: {
        async continueWithGoogle() {
            await signInWithPopup(auth, provider)
        },
        async createUserWithEmail(values) {
            await createUserWithEmailAndPassword(auth, values.email, values.password)
        },
        async signInWithEmail(values) {
            await signInWithEmailAndPassword(auth, values.email, values.password)
        },
        async signOutUser() {
            try { signOut(auth) } catch (e) {
                console.error("Error logging out user")
            }
        }
    }
})
