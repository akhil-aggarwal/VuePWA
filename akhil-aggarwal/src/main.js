import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import vuetify from './plugins/vuetify'
import {store} from './store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import './registerServiceWorker'


Vue.use(vuetify)
Vue.use(firebase)
Vue.use(VueYouTubeEmbed)
Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  created() {

    firebase.initializeApp({
      apiKey: 'AIzaSyCcwzWYnR0WHlNKDzMr97GggCtj7_6HS8c',
      authDomain: 'akhil-aggarwal.firebaseapp.com',
      databaseURL: 'https://akhil-aggarwal.firebaseio.com',
      projectId: 'akhil-aggarwal',
      storageBucket: '',
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadProjects')
  }
  


  
}).$mount('#app')
