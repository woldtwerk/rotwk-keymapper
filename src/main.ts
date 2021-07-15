import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'

// Prime Vue
import PrimeVue from 'primevue/config'

createApp(App).use(PrimeVue).mount('#app')
