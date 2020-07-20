<template>
  <div class="foot-btn" >
    <ul>
      <router-link to="/toutiao" tag="li" active-class="toutiao-active" class="toutiao"><a href="javascript:;"></a></router-link>
      <!-- <router-link to="/xx" tag="li" active-class="write-active" class="write"><a href="javascript:;"></a></router-link> -->
      <router-link to="/user" tag="li" active-class="my-active" class="my"><a href="javascript:;"></a></router-link>
      <!-- <li class="my"><a href="mydoc_m.html"></a></li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .foot-btn{width:100%;height:0.6rem; background:red; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
  .foot-btn ul{width:4.08rem; margin:0 auto;}
  .foot-btn ul li{ float:left;}
  .foot-btn ul li a{ display:block; width:100%;height:100%;}
  .foot-btn ul .toutiao{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%; margin-top:0.05rem;}
  /* .foot-btn ul .write{width:0.82rem;height:0.81rem; background:url(../assets/img/write.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;} */
  .foot-btn ul .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; margin-left:3.18rem; margin-top:0.05rem;}
  
  /* .foot-btn ul .home-active{width:0.44rem;height:0.59rem; background:url(../assets/img/home-active.png) no-repeat 0 0; background-size:100%; margin-top:0.1rem;} */
  /* .foot-btn ul .write-active{width:0.82rem;height:0.81rem; background:url(../assets/img/write-active.png) no-repeat 0 0; background-size:100%; margin-left:1.18rem;} */
  /* .foot-btn ul .my-active{width:0.39rem;height:0.63rem; background:url(../assets/img/my-active.png) no-repeat 0 0;background-size:100%; margin-left:1.18rem; margin-top:0.07rem;} */
  
</style>
