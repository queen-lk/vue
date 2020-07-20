<template>
  <div class="frame-screen-detail" v-if="type==='detail'">
    <div>
      <div class="icon">icon</div>
      <div class="auth_name">auth_name</div>
    </div>
    <div class="title">title</div>
    <hr>
    <div class="time">time</div>
    <div class="content">content</div>
  </div>
  <div class="frame-screen-list" v-else-if="type==='list'">
    <div class="banner">
      banner
    </div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
    <div class="cell">cell</div>
  </div>
</template>

<script>
  export default {
    name:'frame-screen',
    props:{
      type:{
        type:String,
        default: 'detail'
      }
    },
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
  .frame-screen-detail .icon{}
  .frame-screen-list .icon{}
</style>
