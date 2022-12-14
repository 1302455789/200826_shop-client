import Vue from 'vue'
import App from './App.vue'

// 浏览器控制台不显示非产生环境打包的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')