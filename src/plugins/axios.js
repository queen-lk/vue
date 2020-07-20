import axios from 'axios';
import Vue from 'vue';
import router from './router.js'
import vm from '../main.js'
//添加一个请求的拦截器
axios.interceptors.request.use(function(config) {
  //config 含有发出的请求的配置信息  axios(config)then()
  console.log('请求拦截',vm.bLoading);
  vm.bLoading=true;
  console.log('请求拦截2',vm.bLoading);
  // 每次都自动携带token
  let local = window.localStorage.getItem('user')
  let token = local ? JSON.parse(window.localStorage.getItem('user')).token : ''
  config.headers={
    token
  }
  return config;// 撒手放出经过配置的请求
}, function(error) {
  // 发出了错误的请求，拦截
  return Promise.reject(error);
});

// 添加一个响应的拦截器
axios.interceptors.response.use(function(response) {
  vm.bLoading=false;
  console.log('响应拦截',vm.bLoading);
  //response  ~~ axios请求后的res
  // 响应数据回来后，到达目标组件之前，做点事   res.status   res.data.err == 2
  //校验返回数据，token过期，路由跳转login,传递当前路由地址
  let currentRoute = router.currentRoute.fullPath;//获取当前路由全路径，string
  if(response.data.err===2 && !currentRoute.includes('/login')){
    router.replace({
      path:'/login',
      query:{address:currentRoute}
    })
  }
  
  return response;//奔向组件
}, function(error) {
  // 错误的响应，拦截
  return Promise.reject(error);
});

Vue.prototype.$axios=axios;
window.axios=axios;   //×
export default axios;