<template>
  <div class="nav">
    <img src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/logo.png" alt />
    <span>{{title}}</span>
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
  display: flex;
  justify-content: space-between;
  height: 1rem;
  align-items: center;
}
.nav img {
    height: 1rem;
}
.iconfont {
  font-size: 0.2rem;
}
</style>