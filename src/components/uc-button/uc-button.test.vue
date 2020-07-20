<template>
  <div id="app">
    
    <h3>测试 按钮</h3>
    
    <UcButton/>
    <!-- <div @click="login">login</div> -->
    <!-- <uc-button @click.native="login" /> -->
    <!--  -->
    <uc-button @click="login" />
    
    <!--  -->
    <uc-button :text="'登 陆'"/>
    
    <!--  -->
    <uc-button text="登 陆"/>
    
    <!--  -->
    <uc-button :bgColor="'#399'"/>
    
    <!--  -->
    <uc-button bgColor="#399"/>
    <!-- <uc-button>注 册</uc-button> -->
    
  </div>
</template>
<script>
  
  import UcButton from './components/uc-button/uc-button.vue'
  export default {
    name: 'App',
    data:()=>({
    }),
    methods:{
      login(){
        console.log('login业务')
      }
    },
    components: {
      UcButton
    }
  }
</script>

<style>
</style>
