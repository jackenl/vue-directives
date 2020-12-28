import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';

import directives from './utils/directives';
Vue.use(directives);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
