<template>
  <div>
    <Nav title="装修报价" />
    <div class="img">
      <img
        src="http://localhost:8080/%E8%AE%BE%E8%AE%A1%E5%9B%BE/%E5%88%87%E5%9B%BE/10quoted.jpg"
        alt
      />
    </div>
    <div class="main_title">房 先 森 1 0 S 报 价</div>
    <div class="main">
      <div>
        <input type="text" placeholder="请填写建筑面积" />
      </div>
      <div>
        <select name id>
          <option value="现代">现代</option>
        </select>
      </div>
      <div>
        <select name id>
          <option value="1室">1室</option>
        </select>
        <select name id>
          <option value="1厅">1厅</option>
        </select>
      </div>
      <div>
        <select name id>
          <option value="1厨">1厨</option>
        </select>
        <select name id>
          <option value="1卫">1卫</option>
        </select>
        <select name id>
          <option value="1阳台">1阳台</option>
        </select>
      </div>
      <div>
        <button class="button">立即申请</button>
      </div>
      <div class="main_size">装修报价</div>
      <div>全包装修总价：81,889,78元</div>
      <div>你还可以选择</div>
      <div>
        房先森装修半包套餐价,
        <span style="color:yellow">399</span>元/平米
      </div>
      <div>
        <button class="buttons">预约399套餐</button>
      </div>
    </div>
    <div>
      <div class="main_title">我们可以为您提供</div>
      <div class="main_context">
        <div class="main_List" v-for="index in 6" :key="index">
          <i class="iconfont icon-app"></i>
          <div class="item_title">
            <b>产品系列</b>
          </div>
          <div style="text-align: left;font-size:0.25rem">半包、全包套餐、全屋定制及个性化升级</div>
        </div>
      </div>
    </div>
    <div class="buttom_main">
      房先森互联网家装有别于传统装修公司与其他装修中介平台,以自营模式整合设计师与项目经理,杜绝项目转包外包，利用互联网将工地进行在线全景直播,通过去中,
      间环节,提供装修套餐+个性化定制服务。
    </div>
    <div>
      <div class="main_title">服务热线: 400-9977-658</div>
      <div class="bottom_nav">
        <div style="color:green">触摸版</div>
        <div>电脑版</div>
        <div>关于我们</div>
        <div>联系我们</div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>
.img img {
  width: 100%;
}
.main {
  border-bottom: 0.2rem solid #f4f4f4;
}
.iconfont {
  font-size: 0.8rem;
  color: white;
  background-color: #39c893;
  padding: 0.2rem;
  border-radius: 50%;
}
.main_title {
  width: 100%;
  height: 1rem;
  font-size: 0.36rem;
  text-align: center;
  line-height: 1rem;
}
.main div input {
  width: 92%;
  border-radius: 0.1rem;
  height: 0.5rem;
}
.main div select {
  height: 0.5rem;
  width: 100%;
  margin: 0rem 0.2rem;
}
.main div {
  width: 80%;
  height: 0.8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  align-items: center;
}
.button {
  width: 92%;
  height: 0.6rem;
  background-color: #feb605;
  color: white;
  border-radius: 0.1rem;
  border: none;
  font-size: 0.4rem;
}
.main_size {
  font-size: 0.4rem;
}
.buttons {
  width: 92%;
  height: 0.6rem;
  color: green;
  border-radius: 0.1rem;
  border: 0.01rem dashed green;
}
.main_context {
  margin: 0.3rem 0rem 0rem 0rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border-bottom: 0.2rem solid #f4f4f4;
}
.main_List {
  width: 33%;
  height: 2.3rem;
  text-align: center;
}
.item_title {
  margin: 0.14rem 0rem 0rem 0rem;
}
.buttom_main {
  border-bottom: 0.2rem solid #f4f4f4;
  padding: 0.2rem 0rem;
}
.bottom_nav {
  display: flex;
  justify-content: space-around;
  height: 1rem;
  align-items: center;
}
</style>