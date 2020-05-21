<template>
  <!-- 时间管控 -->
  <div class="time">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="..\assets\Administration\gk_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
       <p style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;">
        <img src="..\assets\Administration\nav_logo.png" alt="" style="vertical-align: middle; margin-top: -37px;">
        <span>时间管控</span>
      </p>
    </div>
    <!-- 返回主页 -->
    <div class="index-esc" @click="esc">
      <span>
        <img src="..\assets\Administration\home.png" alt>
        主页
      </span>
    </div>
    <!-- 显示用户登陆和退出 -->
    <login></login>
    <!--  -->
    <div class="timebox">
        <div class="timebox-q">
            请选择机台：
            <select name="" id="" class="timebox-select">
                <option value="" selected>A机</option>
                <option value="">B机</option>
                <option value="">C机</option>
                <option value="">D机</option>
                <option value="">E机</option>
                
            </select>
        </div>
        <div class="timebox-content">
            车速采集间隔：
            <select name="" id="" class="timebox-select">
                <option value="" selected>10分钟</option>
                <option value="">20分钟</option>
                <option value="">30分钟</option>
                <option value="">40分钟</option>
                <option value="">50分钟</option>
                <option value="">60分钟</option>
            </select>
            母液追加流量采集间隔：
            <select name="" id="" class="timebox-select">
                <option value="" selected>10分钟</option>
                <option value="">20分钟</option>
                <option value="">30分钟</option>
                <option value="">40分钟</option>
                <option value="">50分钟</option>
                <option value="">60分钟</option>
            </select>
            水采集间隔：
            <select name="" id="" class="timebox-select">
                <option value="" selected>10分钟</option>
                <option value="">20分钟</option>
                <option value="">30分钟</option>
                <option value="">40分钟</option>
                <option value="">50分钟</option>
                <option value="">60分钟</option>
            </select>
            汽车采集间隔：
            <select name="" id="" class="timebox-select">
               <option value="" selected>10分钟</option>
                <option value="">20分钟</option>
                <option value="">30分钟</option>
                <option value="">40分钟</option>
                <option value="">50分钟</option>
                <option value="">60分钟</option>
            </select>
        </div>
    </div>
    <div class="time-submit">
        <p>提&nbsp;&nbsp;&nbsp;交</p>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "./foot.vue";
import login from "./login_assembly.vue";
export default {
  data() {
    return {};
  },
 components: { foot , login},
   methods: {
    esc() {
      this.$router.push("/index");
    },
    pro(){
        this.$router.push("/personal");
    },
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
/* 内容 */
.timebox{
    width: 6000px;
    height: 1200px;
    margin: 380px auto;
    border: solid 1px transparent;
    background: url(..\assets\Administration\set_bg.png)
}
.timebox-q{
     width: 1880px;
    height: 200px;
    margin: 216px auto 330px;
    /* border: solid 1px red; */
    color: white;
    font-size: 76px;
    line-height: 200px;
    padding-left: 450px;
    box-sizing: border-box;
}
.timebox-select{
    margin-right: 110px;
    width: 480px;
    height: 120px;
    background: transparent;
    border: solid 1px white;
    color: white;
    padding-left: 40px;
    box-sizing: border-box;
}
.timebox-select option{
    background: #000836;
    /* border: solid 1px white; */
    
}

.timebox-content{
    font-size: 80px;
    color: white;
    margin-left: 620px;
}
.time-submit {
  cursor: pointer;
  width: 600px;
  height: 160px;
  margin: 0 auto;
  background: url(..\assets\Administration\button.png);
}
.time-submit p{
  text-align: center;
  font-size: 80px;
  color: white;
  line-height: 160px;
}



/* 头部 */
.time {
  position: relative;
  width: 7680px;
  height: 3240px;
  background: url(..\assets\Administration\other_bg.png);
}
.index-top_nav {
  overflow: hidden;
  width: 3358px;
  height: 292px;
  margin: 0 auto;
  background: url(../assets/index/top_nav.png);
}
/* .index-top_nav img {
  display: block;
  margin: 45px auto;
  width: 1052px;
  height: 168px;
} */
/* 返回首页 */
.index-esc {
  position: absolute;
  top: 100px;
  left: 640px;
  width: 1000px;
  height: 100px;
}
.index-esc img {
  padding-right: 40px;
  width: 140px;
  height: 100px;
  vertical-align: -20px;
}
.index-esc span {
  padding: 0 100px;
  color: #00ecfc;
  font-size: 80px;
  line-height: 100px;
}
/* 退出登陆 */
.index-name_esc {
  position: absolute;
  top: 100px;
  right: 400px;
  width: 1000px;
  height: 100px;
}
.index-name_esc img {
  padding-right: 40px;
  width: 140px;
  height: 100px;
  vertical-align: -20px;
}
.index-name_esc span {
  padding: 0 100px;
  color: #00ecfc;
  font-size: 80px;
  line-height: 100px;
}
</style>

