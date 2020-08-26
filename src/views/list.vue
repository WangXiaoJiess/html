<template>
  <div>
    <div class="box">
      <div class="box-1">
        <img src="../../public/img/logo.png" alt />
      </div>
      <div class="box2">
        <div>
          <div class="iconfont icon-user"></div>
          <div>我的</div>
        </div>

        <div>
          <div class="iconfont icon-nav"></div>
          <div>导航</div>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="../../public/img/banner.jpg" alt />
    </div>
    <div class="ba">
      <div class="iconfont icon-case">
        <p>装修方案</p>
      </div>
      <div class="iconfont icon-pics" style="background:orange">
        <p>效果图</p>
      </div>
      <div class="iconfont icon-designer" style="background:yellow">
        <p>设计师</p>
      </div>
      <div class="iconfont icon-construction-site" style="background:">
        <p>装修攻略</p>
      </div>
      <div class="iconfont icon-decorate" style="background:blue">
        <p>装修攻略</p>
      </div>
      <div class="iconfont icon-loans" style="background:">
        <p>装修贷款</p>
      </div>
      <div class="iconfont icon-pencle" style="background:red">
        <p>免费预约</p>
      </div>
      <div class="iconfont icon-ten" style="background:pink">
        <p>十秒报价</p>
      </div>
    </div>

    <div>
      <div class="box-bottom">
        全屋装修
        <span>包设计、包主材、包水电、包施工</span>
      </div>
      <div class="box-bottom-img">
        <img src="../../public/img/img1.jpg" alt />
      </div>

      <div class="box-bottom-san">
        <div class="iconfont icon-zero">0增项，标准施工</div>
        <div class="iconfont icon-protection-fill">杜绝项目外包</div>
        <div class="iconfont icon-price">装修贷款</div>
      </div>
    </div>
    <div>
      <div class="box-bottom">
        装修预约
        <span>免费上门量房，设计方案满意为止</span>
      </div>
      <div class="box-zhuang">
        <input type="text" placeholder="小区名" />
        <input type="text" placeholder="手机号" />
        <input type="text" placeholder="建筑面积" />
      </div>
      <button class="bottom">立即申请</button>
    </div>
    <div>
      <div class="box-bottom">设计师</div>
      <div>
        <img src="../../public/img/1.png" alt />
      </div>
    </div>
    <div class="box-bottom-img1">
        <img src="../../public/img/3.png" alt="">
    </div>
      <div class="box-bottom-img1">
        <img src="../../public/img/5.png" alt="">
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box-bottom-img1 img{

    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    
}
.bottom {
  width: 5rem;
  height: 1rem;
  background: orange;
  color: white;
  text-align: center;
  margin-top: 0.2rem;
  border-radius: 5px;
  margin-left: 1rem;
}
.box-zhuang input {
  width: 5rem;
  height: 1rem;
  border: 1px solid gray;
  border-radius: 5px;
  margin-top: 0.2rem;
  margin-left: 1rem;
}
.box-bottom-san {
  display: flex;
  justify-content: space-between;
}
.box-bottom-img img {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.box-bottom-img {
  width: 100%;
  height: 40vh;
}
.box-bottom span {
  color: gray;
}
.box-bottom {
  margin-top: 1rem;
  border-left: 3px solid blue;
  font-size: 0.5rem;
}
.ba div p {
  margin-top: 0.1rem;
  color: black;
  line-height: 0.4rem;
}
.ba div {
  background: rgb(70, 144, 95);
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  font-size: 50px;
  border-radius: 1.5rem;
  color: white;
  margin-top: 0.7rem;
  line-height: 1.5rem;
}
.ba {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.banner img {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.banner {
  width: 100%;
  height: 3rem;
  background: red;
}
.box2 div {
  font-size: 0.4rem;
  text-align: center;
  margin-top: 0.08rem;
  padding-right: 0.1rem;
}
.box2 {
  display: flex;
  justify-content: center;
  color: gray;
}
.box-1 img {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
.box-1 {
  width: 2.6rem;
  height: 1rem;
}
.box {
  width: 100%;
  height: 10vh;
  /* background: gray; */
  display: flex;
  justify-content: space-between;
}
</style>