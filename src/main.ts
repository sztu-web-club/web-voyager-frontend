import { createApp } from 'vue'
import piniaPersistPlugin from 'pinia-plugin-persistedstate'
import pinia from './stores'
import App from './App.vue'
import { router } from './router'
import 'virtual:uno.css'
import 'mdui'
import 'mdui/mdui.css'

const app = createApp(App)

app.use(pinia.use(piniaPersistPlugin))
app.use(router)

app.mount('#app')
