import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './locales'
import './styles/index.css'
import App from './App.vue'

// import { print } from './utils/console'

const pinia = createPinia()

createApp(App).use(i18n).use(pinia).mount('#app')