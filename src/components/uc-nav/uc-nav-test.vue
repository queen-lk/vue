<template>
  <div id="app">
    
    <h3>测试 nav组件 </h3>
    
    <!-- <UcNav></UcNav> -->
    <!-- <uc-nav></uc-nav> -->
    <uc-nav bgColor="transparent" bdWidth="0" arrow="gray"></uc-nav>
    
    
  </div>
</template>
<script>
  import UcNav from './components/uc-nav/uc-nav.vue'
  export default {
    name: 'App',
    data:()=>({
    }),
    methods:{
      /* xx(content){
        console.log('xx');
        this.ipt=content
      } */
    },
    mounted(){
      // setTimeout(()=>this.list=['aa','bb','cc'],2000)
    },
    components: {
      UcNav
    }
  }
</script>

<style>
  
</style>
