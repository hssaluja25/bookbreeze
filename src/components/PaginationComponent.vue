<template>
    <div class="join justify-center flex mt-10">
        <button class="join-item btn" @click.prevent="goToPreviousPage">«</button>
        <button class="join-item btn">Page {{ crtPage }}</button>
        <button class="join-item btn" @click.prevent="goToNextPage">»</button>
    </div>
</template>

<script>
export default {
    name: "PaginationComponent",
    computed: {
        crtPage() {
            if (isNaN(this.$route.query.page)) {
                return 1
            }
            else {
                return parseInt(this.$route.query.page)
            }
        }
    },
    methods: {
        goToNextPage() {
            if (isNaN(this.crtPage)) {
                // Currently on page 1
                this.$router.push({ name: 'home', query: { page: 2 } })
            }
            else {
                this.$router.push({ name: 'home', query: { page: this.crtPage + 1 } })
            }
        },
        goToPreviousPage() {
            if (isNaN(this.crtPage) || this.crtPage === 1) {
                // Do nothing
            } else {
                this.$router.push({ name: 'home', query: { page: this.crtPage - 1 } })
            }
        }
    }
}
</script>