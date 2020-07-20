<template>
  <div class="pages__padding">
	<uc-nav bgColor="transparent" bdWidth="0" arrow="gray"></uc-nav> 
    <uc-cell
      v-for="(item,index) of yule"
      :data="item"
      :index="index"
      :key="item.uniquekey"
      collectionName="yule"
     />
  </div>
</template>

<script>
  import UcNav from '../components/uc-nav/uc-nav.vue'
  import UcCell from '../components/uc-cell/uc-cell.vue'
  export default {
    name:'yule',
    props:{},
    data(){
      return {
        yule:[],
      }
    },
   components:{UcNav,UcCell},
    mounted(){
      axios({
        url:'/toutiao/index?type=yule&key=a4015c899555cb37a39e4d771d5d9a3d',
        params:{
          _limit:15
        }
      }).then(
        res=>res.data.error_code === 0 && (this.yule = res.data.result.data)
      )
    },
    updated(){},
    methods:{
		
		}
	
  }
</script>

<style>
  .follow{
    padding-top: .6rem;
  }
</style>
