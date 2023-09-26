import './assets/main.css'
import VeeValidatePlugin from './includes/validation.js'

import { auth } from '@/includes/firebase.config.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faFilter } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import VueTailwindDatepicker from "vue-tailwind-datepicker";
let app = null;
auth.onAuthStateChanged(() => {
    if (!app) {
        library.add([faCartShopping, faFilter])
        app = createApp(App)
        app.component('font-awesome-icon', FontAwesomeIcon)
        app.use(VeeValidatePlugin)
        app.use(VueTailwindDatepicker);
        app.use(createPinia())
        app.use(router)
        app.mount('#app')
    }
})
