<template>
    <div class="navbar bg-base-100">
        <div class="flex-1">
            <a class="btn btn-ghost normal-case text-xl">BookBreeze</a>
        </div>
        <div v-if="showLoginButton" class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <router-link :to="{ name: 'register' }">
                    <li><a>Register</a></li>
                </router-link>
                <router-link :to="{ name: 'login' }">
                    <li><a>Log In</a></li>
                </router-link>
            </ul>
        </div>
        <div v-else>
            <ul class="menu menu-horizontal px-1">
                <!-- Icon -->
                <li class="flex items-center justify-center">
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" class="w-6 h-6" />
                </li>
                <!-- Avatar -->
                <li>
                    <details>
                        <summary>
                            <a class="block shrink-0">
                                <span class="sr-only">Profile</span>
                                <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                    class="h-10 w-10 rounded-full object-cover hover:cursor-pointer" />
                            </a>
                        </summary>
                        <ul class="p-2 bg-base-100">
                            <li><a @click="signOut">Log Out</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
import { mapWritableState, mapActions } from 'pinia'
import useUserStore from '@/stores/user.js'

export default {
    name: 'NavBar',
    computed: {
        ...mapWritableState(useUserStore, ['loggedIn']),
        showLoginButton() {
            if (this.loggedIn) return false
            else return true
        }
    },
    methods: {
        ...mapActions(useUserStore, ['signOutUser']),
        async signOut() {
            await this.signOutUser()
            this.loggedIn = false
        }
    }
}
</script>
