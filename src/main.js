import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BIcon, BIconInstagram, BIconTwitter, BIconTelephone, BIconGithub, BIconMusicNoteBeamed} from 'bootstrap-vue'
import VueRouter from 'vue-router';
import router from './router/index'
import VueParticles from 'vue-particles'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
Vue.use(VueParticles)
Vue.use(VueRouter);
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconInstagramApp', BIconInstagram)
Vue.component('BIconTwitterApp', BIconTwitter)
Vue.component('BIconGithubApp', BIconGithub)
Vue.component('BIconTelephoneIcon', BIconTelephone)
Vue.component('BIconMusicNoteBeamed', BIconMusicNoteBeamed)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
  components: { App },
  template: '<App/>',
})
