<template>
  <div id="app">
    <h2>测试 input</h2>
	<uc-input v-model="ipt"></uc-input>
	<uc-input v-model="ipt2" type="password" label="用户"></uc-input>
  </div>
</template>
<script>
  import UcInput from './components/uc-input/uc-input.vue'
  export default {
    name: 'App',
    data:()=>({
		ipt:'',
		ipt2:'',
    }),
    methods:{
	  
    },
	mounted(){
     
	},
    components: {
		UcInput
    }
  }
</script>

<style>
</style>
