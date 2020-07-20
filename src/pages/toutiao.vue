<template>
  <div class="pages__padding">
	<uc-nav bgColor="transparent" bdWidth="0" arrow="gray"></uc-nav>
    <Banner :data="banner" collectionName="banner"/>
   <uc-cell
      v-for="(item,index) of toutiao"
      :data="item"
      :index="index"
      :key="item.uniquekey"
      collectionName="toutiao"
     />
  </div>
</template>

<script>
  
  import Banner from '../components/banner/banner.vue'
  import UcNav from '../components/uc-nav/uc-nav.vue'
  import UcCell from '../components/uc-cell/uc-cell.vue'
  import axios from '../plugins/axios.js'
  export default {
    name:'toutiao',
    props:{},
    data(){
      return {
        toutiao:[],
        banner:[],
        errorMess:''
      }
    },
    // components:{UcCell},
	components:{UcNav,Banner,UcCell},
    mounted(){
      axios({
        url:'/toutiao/index?type=toutiao&key=a4015c899555cb37a39e4d771d5d9a3d',
        params:{
          // _limit:3
        }
      }).then(
        res=>res.data.error_code === 0 && (this.toutiao = res.data.result.data)
      )
      
      axios({
        url:'/toutiao/index?type=toutiao&key=a4015c899555cb37a39e4d771d5d9a3d',
        params:{
         //_limit:20
        }
      }).then(
        res=>res.data.error_code === 0 && (this.toutiao = res.data.result.data)
      )
    },
    updated(){},
    methods:{}
  }
</script>

<style>

</style>
