<template>
  <div id="app">
    
    <h3>测试 cell</h3>
    
    <uc-cell :data="cellData" :index="cellData.index" collectionName="follow"></uc-cell>
    <uc-cell :data="cellData" />
    <uc-cell 
      v-for="(item,index) of list"
      :data="item"
      :index="index"
      :key="item._id"
      collectionName="home"
      :isAdd="true"
      @add-item="add(item,index)"
     />
    
  </div>
</template>
<script>
  import UcCell from './components/uc-cell/uc-cell.vue'
  export default {
    name: 'App',
    data:()=>({
      list:[
        {_id:1,title:'xx',des:'oo'},
        {_id:2,title:'xx2',des:'oo2'},
      ],
      cellData:{_id:3,title:'xx',des:'oo',index:0}
    }),
    methods:{
      add(item,index){
        console.log('add',item,index);
      }
    },
    mounted(){
      // setTimeout(()=>this.list=['aa','bb','cc'],2000)
    },
    components: {
      UcCell
    }
  }
</script>

<style>
</style>
