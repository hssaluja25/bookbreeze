<!-- Drawer Structure

  .drawer // The root container
  ├── .drawer-toggle // A hidden checkbox to toggle the visibility of the sidebar
  ├── .drawer-content // All your page content goes here
  │    ├── // navbar
  │    ├── // content
  │    └── // footer
  └── .drawer-side // Sidebar wrapper
       ├── .drawer-overlay // A dark overlay that covers the whole page when the drawer is open
       └── // Sidebar content (menu or anything)

-->

<template>
  <div class="drawer">

    <!-- Invisible checkbox to toggle the drawer -->
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <!-- Main Page Content -->
    <div class="drawer-content">
      <nav-bar></nav-bar>

      <main>
        <div class="-mt-10 flex justify-center" style="font-family: melancholight; font-size: 96px;">Trending Books</div>
        <div class="flex justify-evenly mb-12 mt-5">
          <!-- Should open sidebar -->
          <label for="my-drawer" class="btn btn-outline drawer-button">
            <font-awesome-icon :icon="['fas', 'filter']" />
            All Filters
          </label>
          <select class="select select-bordered border-black w-full max-w-xs">
            <option disabled selected>Sort by: Relevancy</option>
            <option>Relevancy</option>
            <option>Newest first</option>
            <option>Top Customer Reviews</option>
          </select>
        </div>

        <!-- v-if is necessary because row-component's DOM is made before the property actually contains value. -->
        <row-component v-if="firstRowCard" :rowCards="firstRowCard"></row-component>
        <row-component v-if="secondRowCard" :rowCards="secondRowCard"></row-component>
        <row-component v-if="thirdRowCard" :rowCards="thirdRowCard"></row-component>
        <row-component v-if="fourthRowCard" :rowCards="fourthRowCard"></row-component>
        <row-component v-if="fifthRowCard" :rowCards="fifthRowCard"></row-component>
        <pagination-component></pagination-component>
      </main>

      <app-footer class="mt-10"></app-footer>
    </div>

    <!-- Drawer Content -->
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>

      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/AppHeader.vue'
import RowComponent from '@/components/RowComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      firstRowCard: null,
      secondRowCard: null,
      thirdRowCard: null,
      fourthRowCard: null,
      fifthRowCard: null,
      URL: import.meta.env.VITE_NYTIMES_URL,
      API_KEY: import.meta.env.VITE_NYTIMES_API_KEY,
      requestOptions: {
        method: 'GET',
        redirect: 'follow'
      }
    }
  },
  components: {
    NavBar,
    AppFooter,
    RowComponent,
    PaginationComponent
  },
  methods: {
    async makeApiCall() {
      const crtPage = parseInt(this.$route.query.page)
      console.log(`crtPage = ${crtPage}`);
      let offset = 0;
      if (isNaN(crtPage) || crtPage === 1) {
        offset = 0;
      } else {
        offset = 20 * (crtPage - 1)
      }
      console.log(`offset = ${offset}`);
      const fetchUrl = `${this.URL}/lists/best-sellers/history.json?api-key=${this.API_KEY}&offset=${offset}`
      console.log(fetchUrl);
      try {
        const response = await fetch(fetchUrl, this.requestOptions);
        if (!response.ok) {
          if (response.status === 429) {
            console.log("Too many requests. Please wait a moment.");
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        }
        const result = await response.json();
        const allBooks = result['results']
        const firstArray = allBooks.slice(0, 4)
        this.firstRowCard = firstArray
        const secondArray = allBooks.slice(4, 8)
        this.secondRowCard = secondArray
        const thirdArray = allBooks.slice(8, 12)
        this.thirdRowCard = thirdArray
        const fourthArray = allBooks.slice(12, 16)
        this.fourthRowCard = fourthArray
        const fifthArray = allBooks.slice(16, 20)
        this.fifthRowCard = fifthArray
      } catch (error) {
        console.log('error', error);
      }
    }
  },
  watch: {
    async $route() {
      // Using the `page` route parameter, it sets the offset
      // parameter for the API call and makes the API call
      await this.makeApiCall();
    },

  },
  async created() {
    // Using the `page` route parameter, it sets the offset
    // parameter for the API call and makes the API call
    await this.makeApiCall();
  }
}
</script>