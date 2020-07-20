<template>
  <div 
    class="nav"
    :style="{
      
      'border-width': bdWidth + 'px'
    }"
  >每日头条
    <ul>
      <li 
        :class=" arrow === 'gray' ? 'gray' : 'default' "
        @click="$router.go(-1)"
       ></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'uc-nav',
    props:{
      bgColor:{
        type:String,
        default:'red'
      },
      bdWidth:{
        type:String,
        default:'1'
      },
      arrow:{
        type:String,
        default:'default'
      }
    },
    
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .nav{height:0.5rem;line-height:0.5rem;width:100%; position:fixed;top:0;left:0; background:red; border-bottom:1px solid #e8eaec; z-index:99;color: white;text-align: center;font-size: 16px;}
  .nav ul{width:6.4rem;height:0.2rem; padding-top:0.15rem; margin:0 auto;}
  .nav ul li{width:0.29rem;height:0.31rem;background-size:100%; margin:0 0 0 0.38rem;position: absolute;top: 5px;}
  .nav ul li.gray{ background:url(./assets/img/history1.png) no-repeat 0 0; width:0.29rem;height:0.31rem;background-size:100%; margin:0 0 0 0.38rem;}
  .nav ul li.default{ background:url(./assets/img/history.png) no-repeat 0 0; width:0.29rem;height:0.31rem;background-size:100%; margin:0 0 0 0.38rem;}
</style>
