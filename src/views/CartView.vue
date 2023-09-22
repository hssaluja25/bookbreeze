<template>
    <nav-bar></nav-bar>
    <div class="pt-12" v-if="showLobster || showEggs || showVeal">
        <h1 class="-mt-7 mb-12 text-center text-4xl font-bold">Cart Items</h1>
        <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <!-- Left section containing items -->
            <div class="rounded-lg md:w-2/3">
                <!-- Card1 -->
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    v-if="showLobster">
                    <img src="@/assets/images/agot.jpg" alt="product-image" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">Lobster</h2>
                            <p class="mt-1 text-xs text-gray-700">4.4 ⭐</p>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center border-gray-100">
                                <span
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                    @click="reduceLobster">
                                    -
                                </span>
                                <!-- Value is the value that the user entered -->
                                <input class="h-8 w-16 border bg-white text-center text-xs outline-none" type="number"
                                    v-model="lobsterQuantity" min="1" />
                                <span
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                    @click="lobsterQuantity += 1">
                                    +
                                </span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm">${{ lobsterPrice }}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                    @click="deleteLobster">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card2 -->
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    v-if="showEggs">
                    <img src="@/assets/images/acoc.jpg" alt="product-image" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">Organic Eggs</h2>
                            <p class="mt-1 text-xs text-gray-700">3.5 ⭐</p>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center border-gray-100">
                                <span
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                    @click="reduceEggs">
                                    -
                                </span>
                                <input class="h-8 w-16 border bg-white text-center text-xs outline-none" type="number"
                                    v-model="eggsQuantity" min="1" />
                                <span
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                    @click="eggsQuantity += 1">
                                    +
                                </span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm">${{ eggsPrice }}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                    @click="deleteEggs">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card3 -->
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    v-if="showVeal">
                    <img src="@/assets/images/adwd.jpg" alt="product-image" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">Veal</h2>
                            <p class="mt-1 text-xs text-gray-700">4.0 ⭐</p>
                        </div>
                        <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center border-gray-100">
                                <span
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                    @click="reduceVeal">
                                    -
                                </span>
                                <input class="h-8 w-16 border bg-white text-center text-xs outline-none" type="number"
                                    v-model="vealQuantity" min="1" />
                                <span
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                    @click="vealQuantity += 1">
                                    +
                                </span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm">${{ vealPrice }}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                    @click="deleteVeal">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Sub total -->
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Subtotal</p>
                    <p class="text-gray-700">${{ subtotal }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-gray-700">Shipping</p>
                    <p class="text-gray-700">$4.99</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Total</p>
                    <div class="">
                        <p class="mb-1 text-lg text-right font-bold">${{ total }}</p>
                        <div class="flex justify-end">
                            <span
                                class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="-ms-1 me-1.5 h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                                </svg>

                                <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
                            </span>
                        </div>
                    </div>
                </div>

                <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                    Check out
                </button>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="max-w-3xl mt-5 mx-auto text-center">
            <h2 class="text-3xl font-extrabold sm:text-4xl">
                Looks like your cart is empty. Get started by adding items to your cart!
            </h2>
        </div>
        <div class="flex justify-center">
            <img src="@/assets/images/empty-cart.png" class="h-2/5 w-2/5" />
        </div>
    </div>
    <app-footer></app-footer>
</template>
  
<script>
import NavBar from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import useUserStore from '@/stores/user.js'

export default {
    name: 'CartView',
    components: {
        NavBar,
        AppFooter
    },
    data() {
        return {
            lobsterUnitPrice: 40.66,
            lobsterQuantity: 1,
            eggsUnitPrice: 2.59,
            eggsQuantity: 1,
            vealUnitPrice: 25.8,
            vealQuantity: 1,
            showLobster: true,
            showEggs: true,
            showVeal: true
        }
    },
    computed: {
        total() {
            return (parseInt(this.subtotal) + parseInt(4.99)).toFixed(2)
        },
        lobsterPrice() {
            return (this.lobsterUnitPrice * this.lobsterQuantity).toFixed(2)
        },
        eggsPrice() {
            return (this.eggsUnitPrice * this.eggsQuantity).toFixed(2)
        },
        vealPrice() {
            return (this.vealUnitPrice * this.vealQuantity).toFixed(2)
        },
        subtotal() {
            return (
                parseInt(this.lobsterPrice) +
                parseInt(this.eggsPrice) +
                parseInt(this.vealPrice)
            ).toFixed(2)
        }
    },
    beforeRouteEnter(to, from, next) {
        const store = useUserStore()
        if (store.loggedIn) {
            // If user is logged in, allow them to proceed
            next()
        } else {
            // If user is already logged in, they should be routed to the login page
            next({ name: 'login' })
        }
    },
    methods: {
        deleteLobster() {
            ; (this.showLobster = false), (this.lobsterQuantity = 0)
        },
        deleteEggs() {
            ; (this.showEggs = false), (this.eggsQuantity = 0)
        },
        deleteVeal() {
            ; (this.showVeal = false), (this.vealQuantity = 0)
        },
        reduceLobster() {
            if (this.lobsterQuantity > 1) {
                this.lobsterQuantity -= 1
            }
        },
        reduceEggs() {
            if (this.eggsQuantity > 1) {
                this.eggsQuantity -= 1
            }
        },
        reduceVeal() {
            if (this.vealQuantity > 1) {
                this.vealQuantity -= 1
            }
        }
    }
}
</script>
  