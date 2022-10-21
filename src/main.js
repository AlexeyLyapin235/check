import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CheckedLayout from "./layouts/CheckedLayout"


const app = createApp(App)

app.use(store)
app.use(router)

app.component('checked-layout',CheckedLayout)

// no dollar sign
app.mount('#app')