import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')
