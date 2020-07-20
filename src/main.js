import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;// 设置为 false 以阻止 vue 在启动时生成生产提示。

import './assets/css/base.css';//全局样式
import './assets/js/font.js'; //字体比值

//引入路由配置
import router from './plugins/router.js';

//引入axios配置
import './plugins/axios';

//注册全局过滤器
import date from './filters/date.js';
import {fillzero} from './filters/fillzero.js';

Vue.filter('date',date)
Vue.filter('fillzero',fillzero)

let vm = new Vue({
  data:{
    bNav:true,
    bFoot:true,
    bLoading:false
  },
  render: h => h(App),
  router,//注册到根
}).$mount('#app')

export default vm;