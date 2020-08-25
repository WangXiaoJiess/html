<template>
  <div class="nav">
    <img src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/logo.png" alt />
    <span class="title">{{title}}</span>
    <div>
      <span>
        <i class="iconfont icon-user"></i>
        我的
      </span>
      <span>
        <i class="iconfont icon-nav"></i>
        导航
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.nav {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 1rem;
  align-items: center;
}
.nav img {
  height: 0.8rem;
}
.iconfont {
  font-size: 0.4rem;
}
.title {
  font-size: 0.36rem;
}
.nav div span {
  font-size: 0.22rem;
  display: inline-block;
  width: 0.6rem;
  text-align: center;
  padding: 0rem 0.1rem;
}
</style>