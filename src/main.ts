import './assets/main.css'
import App from './App.vue'

import { createApp } from 'vue'
/* import the fontawesome core */
import { library, config } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
config.familyDefault = "classic";
config.styleDefault = "duotone";
/* add icons to the library */
library.add(faUserSecret)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
