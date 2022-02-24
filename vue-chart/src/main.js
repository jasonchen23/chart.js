import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')
// createApp.config.productionTip = false;

createApp({
  render: h => h(App)
}).use(store).use(router).mount("#app");
