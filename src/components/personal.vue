<template>
  <!-- 个人中心 -->
  <div class="personal">
    <!-- 顶部logo -->
    <div class="index-top_nav">
      <!-- <img src="../assets/index/home_logo.png" alt> -->
      <!-- <img src="../assets/index/top_nav.png" alt=""> -->
      <p
        style="text-align: center; font-family: 庞门正道标题体; font-size: 180px;color:#00ecfc; letter-spacing:15px;"
      >
        <img
          src="..\assets\Administration\nav_logo.png"
          alt
          style="vertical-align: middle;margin-top: -37px;"
        />
        <span>个人中心</span>
      </p>
    </div>
    <!-- 返回主页 -->
    <div class="index-esc" @click="esc">
      <span>
        <img src="..\assets\Administration\home.png" alt />
        主页
      </span>
    </div>
    <!-- 显示用户登陆和退出 -->
    <login></login>

    <div class="personalbox">
      <div class="personalbox-img">
        <img src="..\assets\personal\personal_name.png" alt />
      </div>
      <div class="personalbox-txt">
        <p class="personalbox-p1">{{name}}</p>
        <!-- <p class="personalbox-p2">{{name.name2}}</p>
        <p class="personalbox-p3">{{name.name3}}</p>-->
      </div>
      <div class="personalbox-button" @click="sece">
        <img src="..\assets\personal\personal_button.png" alt />
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import foot from "./foot.vue";
import login from "./login_assembly.vue";
export default {
  data() {
    return {
      name: ""
    };
  },
  components: { login },
  mounted() {
    this.names();
  },
  methods: {
    names() {
      var id = localStorage.id;
      this.name = id;
      console.log(this.name);
      
    },
    esc() {
      this.$router.push("/index");
    },
    pro() {
      this.$router.push("/personal");
    },
    sece() {
      localStorage.removeItem("id");
      this.$router.push("/login");
    }
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

.personalbox {
  width: 1200px;
  height: 1850px;
  margin: 300px auto;
}
.personalbox-img {
  width: 736px;
  height: 736px;
  margin: 0 auto 144px;
}
.personalbox-txt {
  text-align: center;
  color: white;
}
.personalbox-p1 {
  font-size: 160px;
  margin-bottom: 70px;
}
.personalbox-p2 {
  font-size: 90px;
  margin-bottom: 75px;
}
.personalbox-p3 {
  font-size: 90px;
  margin-bottom: 276px;
}
/* 头部 */
.personal {
  overflow: hidden;
  position: relative;
  width: 7680px;
  height: 3240px;
  background: url(../assets/index/home_bg.png);
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
  width: 1400px;
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

