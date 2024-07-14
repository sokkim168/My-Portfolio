import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library, config } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
config.familyDefault = "classic";
config.styleDefault = "duotone";
/* add icons to the library */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas);
library.add(fab);
library.add(faUserSecret)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
