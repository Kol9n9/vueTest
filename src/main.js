import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";

library.add(fas);
dom.watch();

createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
