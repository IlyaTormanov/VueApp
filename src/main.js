import Vue from 'vue'
import App from './App.vue'
import { VueReCaptcha }  from "vue-recaptcha-v3";
import {router} from "@/router";

Vue.use(VueReCaptcha, { siteKey: '6Lf3-GIUAAAAAESEwWz-5W2LDhyAVbtsL-9KHkGt' });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
