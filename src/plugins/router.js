import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//安装插件

import Detail from '../pages/detail.vue'
import Toutiao from '../pages/toutiao.vue'
import Shehui from '../pages/shehui.vue'
import Guonei from '../pages/guonei.vue'
import User from '../pages/user.vue'
import Login from '../pages/login.vue'
import Reg from '../pages/reg.vue'
import Error from '../pages/Error.vue'
import Yule from '../pages/yule.vue'
import Tiyu from '../pages/tiyu.vue'
import Junshi from '../pages/junshi.vue'
import Keji from '../pages/keji.vue'
import Caijing from '../pages/caijing.vue'
import Shishang from '../pages/shishang.vue'


//路由配置
let routes=[
  {path:'/toutiao',component:Toutiao},
  {path:'/shehui',component:Shehui},
  {path:'/guonei',component:Guonei},
  {path:'/yule',component:Yule},
  {path:'/tiyu',component:Tiyu},
  {path:'/junshi',component:Junshi},
  {path:'/keji',component:Keji},
  {path:'/caijing',component:Caijing},
  {path:'/shishang',component:Shishang},
  {path:'/User',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {name:'detail', path:'/detail/:_id',component:Detail},
  {path:'/',redirect:'/toutiao'},
  {path:'*',component:Error},
];

let router = new VueRouter({
  routes,
  mode:'history'
});

export default router;