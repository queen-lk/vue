<template>
<a :href="data.url">
	 <div class="uc-cell">
    <div>
      <h2><!-- <span v-show="index != null">{{index + 1}}.</span> -->{{data.title}}</h2>
      <span>来源:{{data.author_name}}</span><span>{{data.date}}</span>
	  <img :src="data.thumbnail_pic_s" alt=""/>
    </div>
    <!-- <a v-if="isAdd" href="javascript:;" @click="$emit('add-item')">+</a> -->
  </div>
</a>
 
</template>

<script>
  export default {
    name:'uc-cell',
    props:{
      data:{
        type:Object,
        required:true
      },
      index:{
        type:Number,
        default: null
      },
      collectionName:{
        type:String,
        default:null
      },
      isAdd:{
        type:Boolean,
        default:false
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
      // toDetail(){
      //   if(this.collectionName){
      //     this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
      //   }
      // }
    }
  }
</script>

<style scoped>
  .uc-cell{height: 110px; position:relative;color:#494d4d;width:6.4rem; margin:30px auto;clear: both;padding:0.2rem 0.4rem;border-bottom:1px dashed #ccc;}
  .uc-cell:active{background: #ccc;}
  .uc-cell h2{overflow:hidden;font-size: 18px;width: 220px;font-weight: normal;margin-bottom: 20px;}
  .uc-cell span{max-height:1.8rem;overflow:hidden;font-size: 12px;color: gray;margin-right: 15px;}
  .uc-cell img{width: 150px;height: 100px;position: absolute;top: 10px;right: 30px;}
  /* .uc-cell>a{position: absolute;right:1rem;top:50%;width: 20px;height:20px;color:#fff;margin-top: 5px;border-radius: 50%;background-color: #494D4D;text-align: center; }*/
</style>
