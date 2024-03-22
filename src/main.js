import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})



createApp(App).use(router).use(vuetify).use(MotionPlugin).mount('#app')
