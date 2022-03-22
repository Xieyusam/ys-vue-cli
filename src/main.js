import Vue from 'vue'
import App from '@/App.vue'
import test from './test'

import './styles/index.scss'
test()

new Vue({
  render: (h) => h(App),
}).$mount('#app')