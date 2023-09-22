import './assets/main.css'
import VeeValidatePlugin from './includes/validation.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// This would run the install method in our plugin
app.use(VeeValidatePlugin)

app.mount('#app')
