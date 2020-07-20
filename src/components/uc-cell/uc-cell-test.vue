<template>
  <div id="app">
    <h2>测试 cell</h2>
	<!-- <uc-cell :data="cellData" :index="cellData.index" collectionName="follow"></uc-cell>
	<uc-cell :data="cellData" /> -->
	<uc-cell 
		v-for="(item,index) of list"
		:data="item"
		:index="index"
		:key="item._id"
		collectionName="home"
	/>
  </div>
</template>
<script>
  import UcCell from './components/uc-cell/uc-cell.vue'
  export default {
    name: 'App',
    data:()=>({
		list:[
			{_id:1,title:'守株待兔',des:'守株待兔'},
			{_id:2,title:'守株待兔',des:'守株待兔'},
			{_id:3,title:'守株待兔',des:'守株待兔'},
			{_id:4,title:'守株待兔',des:'守株待兔'},
			{_id:5,title:'守株待兔',des:'守株待兔'},
		],
		cellData:{_id:6,title:'iyff',des:'sdfg',index:0}
    }),
    methods:{
	  
    },
	mounted(){
     
	},
    components: {
		UcCell
    }
  }
</script>

<style>
</style>
