<template>
  <router-view></router-view>
</template>

<script>
import { auth } from '@/includes/firebase.config.js'
import useUserStore from '@/stores/user.js'
import { mapWritableState } from 'pinia'
export default {
  name: 'LibraryManagement',
  computed: {
    ...mapWritableState(useUserStore, ['loggedIn']),
  },
  async created() {
    // Set loggedIn = true if user logged in
    if (auth.currentUser) {
      this.loggedIn = true
    }
  }
}
</script>
