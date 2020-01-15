import Vue from 'vue'
import App from './App.vue'
import { VueReCaptcha }  from "vue-recaptcha-v3";
import {router} from "@/router";

Vue.use(VueReCaptcha, { siteKey: '6Ld4FM4UAAAAADAtxAOAjKy3zymIcoZv27O2VR7d' });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
