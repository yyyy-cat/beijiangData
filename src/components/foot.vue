<template>
  <!-- 底部导航 -->
  <div class="foot">
    <div class="foot-box">
      <ul>
        <li ref="efficiency">
          <router-link to="/efficiency">机台运行效率</router-link>
        </li>
        <li ref="Administration">
          <router-link to="/Administration">管控标准</router-link>
        </li>
        <li ref="mother">
          <router-link to="/mother">母液化料</router-link>
        </li>
        <li ref="production">
          <router-link to="/production">生产运行</router-link>
        </li>
        <li ref="history">
          <router-link to="/history">历史数据分析</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      link:[{
        to:"/efficiency",
        tatil:"机台运行效率"
      },{
        to:"/Administration",
        tatil:"管控标准"
      },{
        to:"/mother",
        tatil:"母液化料"
      },{
        to:"/production",
        tatil:"生产运行"
      },{
        to:"/history",
        tatil:"历史数据分析"
      }],
      cur:0
      
    }
  },
  mounted(){
    // setInterval(() => {
    //   this.cur++;
    //   if (this.cur > 4) {
    //     this.cur = 0;
    //   }
    //   if (this.cur==0) {
    //     // this.$router.push("/Administration")
    //   console.log(this.cur);
    //     // console.log("aaaa");
        
    //     // this.$refs.Administration.color = "red"
    //   }
    //   if (this.cur==1) {
    //     // this.$router.push("/efficiency")
    //     console.log(this.cur);
    //   }
    //   if (this.cur==2) {
    //     // this.$router.push("/mother")
    //     console.log(this.cur);
    //   }
    //   if (this.cur==3) {
    //     // this.$router.push("/production")
    //     console.log(this.cur);
    //   }
    //   if (this.cur==4) {
    //     // this.$router.push("/history")
    //     console.log(this.cur);
    //   }
    // },5000)
    // this.sett()
  },
  methods:{
    // sett() {
    //   // console.log(this.cur);
      
    //   this.cur++;
    //   if (this.cur > 4) {
    //     this.cur = 0;
    //   }
    //   // if (this.cur==0) {
    //   //   this.$router.push("/Administration")
    //   // }
    //   // if (this.cur==1) {
    //   //   this.$router.push("/efficiency")
    //   // }
    //   // if (this.cur==2) {
    //   //   this.$router.push("/mother")
    //   // }
    //   // if (this.cur==3) {
    //   //   this.$router.push("/production")
    //   // }
    //   // if (this.cur==4) {
    //   //   this.$router.push("/history")
    //   // }
    //   console.log(this.cur);
    // },
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
