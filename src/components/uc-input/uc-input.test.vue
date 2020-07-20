<template>
  <div id="app">
    
    <h3>测试 input</h3>
    
    <!-- <uc-input :value="ipt" @input="xx"></uc-input> -->
    <uc-input v-model="ipt"></uc-input>
    <uc-input v-model="ipt2" type="password" label="用户"></uc-input>
    
    
  </div>
</template>
<script>
  import UcInput from './components/uc-input/uc-input.vue'
  export default {
    name: 'App',
    data:()=>({
      ipt:'bmw',
      ipt2:'',
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
      UcInput
    }
  }
</script>

<style>
</style>
