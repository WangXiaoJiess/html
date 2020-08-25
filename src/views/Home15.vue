<template>
  <div>
      <Nav title="装修报价"/>
      <div class="img">
          <img src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/10quoted.jpg" alt="">
      </div>
      <div class="mian_title">
          房 先 森 1 0 S 报 价
      </div>
      <div>
          
      </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
    components:{
        Nav
    }
}
</script>

<style scoped>
.img img{
    width: 100%;
}
.mian_title{
    width: 100%;
    height: 1rem;
    font-size: 0.36rem;
    text-align: center;
    line-height: 1rem;
}
</style>