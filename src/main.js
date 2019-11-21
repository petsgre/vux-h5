// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
import { XTextarea, XInput, XButton, AlertPlugin, ConfirmPlugin, ToastPlugin, Cell, Group } from 'vux'

Vue.config.productionTip = false
// const FastClick = require('fastclick')
// FastClick.attach(document.body)

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

Vue.component('x-input', XTextarea)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('cell', Cell)
Vue.component('group', Group)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      temp: {}
    }
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
