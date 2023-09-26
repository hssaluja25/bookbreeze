<template>
    <ul class="menu p-4 w-80 min-h-full bg-[#222831] text-base-content">
        <!-- All Filters heading -->
        <div style="font-family: poppins; font-weight: 600; font-size: xx-large;" class="text-white mt-2">Filters</div>

        <!-- Title -->
        <div style="font-weight: 600; font-size: medium;" class="mt-8 ml-1 mb-1 text-white">Title</div>
        <div>
            <label for="BookTitle"
                class="relative block bg-white overflow-hidden rounded-md border border-white px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-white">
                <input type="email" id="BookTitle" placeholder="Email"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span
                    class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Title
                </span>
            </label>
        </div>

        <!-- Author -->
        <div style="font-weight: 600; font-size: medium;" class="mt-3 ml-1 mb-1 text-white">Author</div>
        <div>
            <label for="BookAuthor"
                class="bg-white relative block overflow-hidden rounded-md border border-black px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input type="email" id="BookAuthor" placeholder="Email"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

                <span
                    class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Author
                </span>
            </label>
        </div>

        <!-- Genre -->
        <div style="font-weight: 600; font-size: medium;" class="mt-3 ml-1 mb-1 text-white">Genre</div>
        <div>
            <label for="Genre"
                class="relative block overflow-hidden rounded-md border border-black px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 bg-white">
                <input type="email" id="Genre" placeholder="Email"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />

                <span
                    class="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Genre
                </span>
            </label>
        </div>

        <!-- DatePicker -->
        <div style="font-weight: 600; font-size: medium;" class="mt-3 ml-1 mb-1 text-white">Publish Date</div>
        <vue-tailwind-datepicker as-single :formatter="formatter" v-model="dateValue" />


        <button class="btn btn-primary mt-8 text-white bg-[#C70039] border-none hover:bg-[#A40031]"
            style="font-family: poppins;" @click.prevent="closeDrawer">
            Go
        </button>
    </ul>
</template>

<script>
import VueTailwindDatepicker from "vue-tailwind-datepicker";

export default {
    name: 'DrawerComponent',
    data() {
        return {
            dateValue: [],
            formatter: {
                date: 'DD MM YYYY',
                month: 'MMM'
            }
        };
    },
    methods: {
        closeDrawer() {
            var checkbox = document.getElementById("my-drawer");
            if (checkbox) {
                checkbox.checked = false;
            }
        }
    },
    components: {
        VueTailwindDatepicker
    },
};
</script>