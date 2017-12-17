import Vue from 'vue'
import App from './App'
import {Swipe, Button, Field } from 'mint-ui'
import './mock/mockServer'

import router from './router'
import store from './store'

Vue.component(Swipe.name, Swipe)
Vue.component(Button.name, Button);
Vue.component(Field.name, Field)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
