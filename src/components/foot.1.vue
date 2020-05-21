<template>
  <!-- 底部导航 -->
  <div class="foot">
    <div class="foot-box">
      <ul>
        <li>
          <router-link to="/Administration">管控标准</router-link>
        </li>
        <li>
          <router-link to="/efficiency">机台运行效率</router-link>
        </li>
        <li>
          <router-link to="/mother">母液化料</router-link>
        </li>
        <li>
          <router-link to="/production">生产运行</router-link>
        </li>
        <li>
          <router-link to="/history">历史数据分析</router-link>
        </li>
      </ul>
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
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.foot {
  /* border: solid 1px; */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 3927px;
  height: 312px;
  background: url(..\assets\index\foot_nav.png);
}
.foot-box{
  /* border: solid 1px red; */

  overflow: hidden;
    /* border: solid 1px; */
    width: 100%;
    height: 100%;
    position: relative;
}
.foot ul {
  /* border: solid 1px red; */
width: 65%;
 position: absolute;
left: 50%;
transform: translate(-50%);
line-height: 336px;

}
.foot ul li {
  float: left;
}
.foot ul li a {
  color: #00ecfc;
  font-size: 80px;
  padding: 60px;
}
.foot ul li a:hover {
  color: #eb9d46;
  font-size: 80px;
  padding: 60px;
}
</style>
