<template>
  <div id="app">
    <Loading v-show="$root.bLoading"/>    
    <Header v-show="$root.bNav"/>
    <router-view></router-view>
    <Footer v-show="$root.bFoot"/>
  </div>
</template>
<script>
  import Header from './layouts/header.vue'
  import Footer from './layouts/footer.vue'
  import Loading from './components/loading'
  export default {
    name: 'App',
    data:()=>({
    }),
    methods:{
    },
    watch:{
    	$route:{//路由监听
        handler(to){
          let path = to.path;
          if(/toutiao|shehui|guonei/.test(path)){
            this.$root.bNav=this.$root.bFoot=true;
          }
          if(/detail|login|Error|reg/.test(path)){
            this.$root.bNav=false;
			this.$root.bFoot=false;
          }
          if(/user/.test(path)){
            this.$root.bNav=false;
            this.$root.bFoot=true;
          }
        },
        immediate:true
      }
    },
    mounted(){
    },
    components: {
      Footer,Header,Loading
    }
  }
</script>

<style>
  
</style>
