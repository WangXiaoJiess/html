<template>
  <div id="Box">
    <div class="Sir_top">
      <div>
        <img src="../../public/切图/关注1.png" class="top_img1" />
      </div>
    </div>

    <div class="Sir_sousuo">
      <van-search class="inp1" placeholder="请输入搜索关键词" />
      <van-button class="but1" type="info" color="#2bb281">搜索</van-button>
    </div>

    <div class="Sir_gongleng">
      <ul class="ul1">
        <li class="li1">装修前</li>
        <li class="li1">装修中</li>
        <li class="li1">装修后o</li>
      </ul>

      <div class="xiaotu">
        <div class="div1">
          <div class="iconfont icon-house"></div>
          <p>收房验房</p>
        </div>

        <div class="div1">
          <div class="iconfont icon-mobile"></div>
          <p>装修预算</p>
        </div>
        <div class="div1">
          <div class="iconfont icon-taiji"></div>
          <p>装修风水</p>
        </div>
        <div class="div1">
          <div class="iconfont icon-designer"></div>
          <p>装修设计</p>
        </div>
      </div>

      <div class="zxlc">了解装修流程</div>
    </div>

    <!-- 为您推荐 -->
    <div class="Sir_tuijian">
      <div class="tuijian">为您推荐</div>

      <!-- 1 -->
      <div class="shangping">
        <img src="../../public/切图/交房.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 2 -->
      <div class="shangping">
        <img src="../../public/切图/交房2.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 3 -->
      <div class="shangping">
        <img src="../../public/切图/交房.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 4 -->
      <div class="shangping">
        <img src="../../public/切图/交房2.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 5 -->
      <div class="shangping">
        <img src="../../public/切图/交房.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 6 -->
      <div class="shangping">
        <img src="../../public/切图/交房.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 7 -->
      <div class="shangping">
        <img src="../../public/切图/交房2.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 8 -->
      <div class="shangping">
        <img src="../../public/切图/交房2.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 9 -->
      <div class="shangping">
        <img src="../../public/切图/交房.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
      <!-- 10 -->
      <div class="shangping">
        <img src="../../public/切图/交房2.png" class="sp_img1" />
        <div class="sp_right">
          <p class="p1">开发商延期交房，业主如何维权呢？</p>
          <p class="p2">
            <span class="iconfont icon-time">2016—07-07</span>
            <span class="iconfont icon-view">115</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.top_img1 {
  width: 7.2rem;
}
.Sir_sousuo {
  width: 7.2rem;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
.inp1 {
  width: 6rem;
  height: 100%;
}
.but1 {
  width: 1.2rem;
  height: 100%;
}
.Sir_gongleng {
  width: 7.2rem;
  height: 34vh;
  margin-top: 10px;
  background-color: white;
}
.ul1 {
  width: 7.2rem;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid gray;
}
.li1 {
  height: 100%;
  line-height: 8vh;
}
.xiaotu {
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.div1 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.icon-house,
.icon-mobile,
.icon-taiji,
.icon-designer {
  font-size: 52px;
  color: #39c894;
}
.zxlc {
  width: 99%;
  height: 8vh;
  border: 1px solid #39c894;
  text-align: center;
  line-height: 8vh;
  color: #39c894;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Sir_tuijian {
  width: 7.2rem;

  margin-top: 10px;
}
.tuijian {
  width: 7.2rem;

  height: 5vh;
  font-size: 20px;
  border-left: 5px solid #39c894;
  text-align: left;
  line-height: 5vh;
}
.shangping {
  width: 7.2rem;
  width: 100%;

  height: 15vh;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
}
.sp_img1 {
  width: 2rem;
  height: 100%;
}
.sp_right {
  width: 5.5rem;
  height: 100%;
  position: relative;
}
.p1 {
  position: absolute;
  top: 5px;
}
.p2 {
  width: 5.5rem;
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>