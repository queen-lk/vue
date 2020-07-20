<template>
  <div class="pages__padding">
	  <uc-nav bgColor="transparent" bdWidth="0" arrow="gray"></uc-nav>
    <uc-cell
      v-for="(item,index) of guonei"
      :data="item"
      :key="item.uniquekey"
      collectionName="guonei"
     />
  </div>
</template>

<script>
  import UcNav from '../components/uc-nav/uc-nav.vue'
  import UcCell from '../components/uc-cell/uc-cell.vue'
  export default {
    name:'guonei',
    props:{},
    data(){
      return {
        guonei:[],
      }
    },
    components:{UcNav,UcCell},
    mounted(){
      axios({
        url:'/toutiao/index?type=guonei&key=a4015c899555cb37a39e4d771d5d9a3d',
        params:{
      //    _limit:12
        }
      }).then(
		 res=>res.data.error_code === 0 && (this.guonei = res.data.result.data)
		// console.log(this.column)
      )
    },
    updated(){},
    methods:{}
  }
</script>

<style>
</style>
