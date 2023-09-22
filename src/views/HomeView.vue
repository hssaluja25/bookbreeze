<template>
  <nav-bar></nav-bar>

  main content here
  <app-footer></app-footer>
</template>

<script>
import NavBar from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    AppFooter
  }
}
</script>