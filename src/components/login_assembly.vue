<template>
  <!-- 跳转登陆后的页面 -->
  <div id="login">
    <div class="index-name_esc">
      <!-- 跳转登陆后的页面 -->
      <span @click="pro">
        <img src="..\assets\index\home_name.png" alt />
        {{name}}
      </span>
      <span @click="sece">
        <img src="..\assets\index\home_esc.png" alt />
        退出
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {},
  mounted() {
    this.names();
  },

  methods: {
    names() {
      var id = localStorage.id;
      console.log(id);

      this.name = id;
    },

    pro() {
      this.$router.push("/personal");
    },
    sece() {
      // localStorage.idea = 11122233332221
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
/* 退出登陆 */

.index-name_esc {
  position: absolute;
  top: 100px;
  right: 400px;
  width: 1100px;
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
