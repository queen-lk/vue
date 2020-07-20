<template>
	<!-- <div class="header">
		今日头条
	</div> -->
  <div class="nav">
    <ul>
      <router-link tag="li" to="/toutiao" active-class="active"><a href="javascript:;" >头条</a></router-link>
      <router-link tag="li" to="/shehui" active-class="active"><a href="javascript:;" >社会</a></router-link>
      <router-link tag="li" to="/guonei" active-class="active"><a href="javascript:;" >国内</a></router-link>
      <router-link tag="li" to="/yule" active-class="active"><a href="javascript:;" >娱乐</a></router-link>
      <router-link tag="li" to="/tiyu" active-class="active"><a href="javascript:;" >体育</a></router-link>
      <router-link tag="li" to="/junshi" active-class="active"><a href="javascript:;" >军事</a></router-link>
	  <router-link tag="li" to="/keji" active-class="active"><a href="javascript:;" >科技</a></router-link>
	  <router-link tag="li" to="/caijing" active-class="active"><a href="javascript:;" >财经</a></router-link>
	  <router-link tag="li" to="/shishang" active-class="active"><a href="javascript:;" >时尚</a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    props:{},
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
  /* .header{color: white;background: red;font-size: 10px;text-align: center;} */
  .nav{margin-top:0.5rem;; width:100%;height:0.6rem; position:fixed; top:0;left:0; z-index:2;background:#fff;	overflow-x: scroll;}
  .nav ul{width:500%;height:0.6rem;/* margin:0 auto; */display: flex;flex-direction: row;align-items: center;margin-bottom: 10px;}
  .nav ul li{width:1rem;height:0.6rem; /* float:left; */list-style: none;}
  .nav ul li a{ display:block;width:1rem;height:0.6rem; line-height:0.6rem; text-align:center; font-size:18px; color:black;}
  .nav ul li.active a{height:0.5rem; border-bottom:1px solid red; color:red;} 
</style>
