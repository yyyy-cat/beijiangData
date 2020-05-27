import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import index2 from '@/components/index2'
import foot from '@/components/foot'
import Administration from '@/components/Administration'
import efficiency from '@/components/efficiency'
import mother from '@/components/mother'
import production from '@/components/production'
import productiontable from '@/components/productiontable'
import history from '@/components/history'
import history2 from '@/components/history2'
import personal from '@/components/personal'
import time from '@/components/time'
import login from '@/components/login'
import yuenanAdministration from '@/components/yuenanAdministration'
import yenanyuanshiliaoshuju from '@/components/yenanyuanshiliaoshuju'
import yuenanjiangrantouru from '@/components/yuenanjiangrantouru'
import yuenanzhizaotouru from '@/components/yuenanzhizaotouru'
import yuenanhouzhengtouru from '@/components/yuenanhouzhengtouru'
import yuenanransehualiao from '@/components/yuenanransehualiao'
import yuenanfuzhucailiao from '@/components/yuenanfuzhucailiao'
import yuenanjiangranfoot from '@/components/yuenanjiangranfoot'
import yuenanranseyongliao from '@/components/yuenanranseyongliao'
import yuenanshangjiangfuliao from '@/components/yuenanshangjiangfuliao'
import yuenanhouzhengfuliao from '@/components/yuenanhouzhengfuliao'
import yuenanjiangranguocheng from '@/components/yuenanjiangranguocheng'
import yuenanguochengnenghaoshuju from '@/components/yuenanguochengnenghaoshuju'
import yuenanzhibukongtiao from '@/components/yuenanzhibukongtiao'
import yuenanhouzhengguocheng from '@/components/yuenanhouzhengguocheng'
import yuenanhuanbaoshuju from '@/components/yuenanhuanbaoshuju'

import i111 from '@/components/i111'
import i1 from '@/components/i1'
import i2 from '@/components/i2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //主页
      path: "/index",
      component:()=>import("@/components/index"),

    },
    {
      //主页2
      path: "/index2",
      component:()=>import("@/components/index2"),
    },
    {
      //foot
      path: "/foot",
      component:()=>import("@/components/foot"),
    },
    {
      //管控标准
      path: "/Administration",
      component:()=>import("@/components/Administration"),
    },
    {
      //机台运行效率
      path: "/efficiency",
      component:()=>import("@/components/efficiency"),
    },
    {
      //母液化料
      path: "/mother",
      component:()=>import("@/components/mother"),
    },

    {
      //生产运行
      path: "/production",
      component:()=>import("@/components/production"),
    },
    {
      //生产运行图表
      path: "/productiontable",
      component:()=>import("@/components/productiontable"),
    },
    {
      //历史数据分析
      path: "/history",
      component:()=>import("@/components/history"),
    },
    {
      //历史数据分析2
      path: "/history2",
      component:()=>import("@/components/history2"),
    },
    {
      //个人中心
      path: "/personal",
      component:()=>import("@/components/personal"),
    },
    {
      //时间控制
      path: "/time",
      component:()=>import("@/components/time"),
    },
    {
      //登陆页面
      path: "/login",
      component:()=>import("@/components/login"),
    },
    //越南数据展示
    {
      //越南管控标准
      path: "/yuenanAdministration",
      component:()=>import("@/components/yuenanAdministration"),
    },
    {
      //越南原材料数据
      path: "/yenanyuanshiliaoshuju",
      component:()=>import("@/components/yenanyuanshiliaoshuju"),
    },
    {
      //越南浆染投入产出数据
      path: "/yuenanjiangrantouru",
      component:()=>import("@/components/yuenanjiangrantouru"),
    },
    {
      //越南织造投入产出数据
      path: "/yuenanzhizaotouru",
      component:()=>import("@/components/yuenanzhizaotouru"),
    },
    {
      //跳转织造图表
      path: "/zhizaotourucharts",
      name: "zhizaotourucharts",
      component:()=>import("@/components/zhizaotourucharts"),
    },
    {
      //跳转辅助图表
      path: "/fuzhucailiaocharts",
      name: "fuzhucailiaocharts",
      component:()=>import("@/components/fuzhucailiaocharts"),
    },
    {
      //跳转环保数据图表
      path: "/huanbaoshujucharts",
      name: "huanbaoshujucharts",
      component:()=>import("@/components/huanbaoshujucharts"),
    },
    {
      //跳转织造图表详情
      path: "/zhizaotourudetail/:wdata/:type",
      name: "zhizaotourudetail",
      component:()=>import("@/components/zhizaotourudetail"),
    },
    {
      //越南后整投入产出数据
      path: "/yuenanhouzhengtouru",
      component:()=>import("@/components/yuenanhouzhengtouru"),
    },
    {
      //越南辅助材料
      path: "/yuenanfuzhucailiao",
      component:()=>import("@/components/yuenanfuzhucailiao"),
    },
    {
      //越南浆染材料底部导航
      path: "/yuenanjiangranfoot",
      component:()=>import("@/components/yuenanjiangranfoot"),
    },
    {
      //越南染色化料
      path: "/yuenanransehualiao",
      component:()=>import("@/components/yuenanransehualiao"),
    },
    {
      //越南染色用料
      path: "/yuenanranseyongliao",
      component:()=>import("@/components/yuenanranseyongliao"),
    },
    {
      //越南上浆辅料
      path: "/yuenanshangjiangfuliao",
      component:()=>import("@/components/yuenanshangjiangfuliao"),
    },
    {
      //越南后整辅料
      path: "/yuenanhouzhengfuliao",
      component:()=>import("@/components/yuenanhouzhengfuliao"),
    },
    {
      //越南过程耗能数据
      path: "/yuenanguochengnenghaoshuju",
      component:()=>import("@/components/yuenanguochengnenghaoshuju"),
    },
    {
      //越南浆染过程耗能
      path: "/yuenanjiangranguocheng",
      component:()=>import("@/components/yuenanjiangranguocheng"),
    },
    {
      //越南织布空调耗能
      path: "/yuenanzhibukongtiao",
      component:()=>import("@/components/yuenanzhibukongtiao"),
    },
    {
      //越南后整过程耗能
      path: "/yuenanhouzhengguocheng",
      component:()=>import("@/components/yuenanhouzhengguocheng"),
    },
    {
      //越南环保数据
      path: "/yuenanhuanbaoshuju",
      component:()=>import("@/components/yuenanhuanbaoshuju"),
    },
    {
      //越南浆染辅料分析
      path: "/yuenanshangjiangfuliaofenxi",
      component:()=>import("../components/yuenanshangjiangfuliaofenxi"),
    },{
      //越南浆染辅料分析
      path: "/shiliaoshujufoot",
      component:()=>import("../components/shiliaoshujufoot"),
    },{
      //越南浆染辅料分析
      path: "/jiangrantourufoot",
      component:()=>import("../components/jiangrantourufoot"),
    },{
      //越南后整辅料foot
      path: "/yuenanhouzhengfoot",
      component:()=>import("../components/yuenanhouzhengfoot"),
    },{
      //越南后整辅料foot
      path: "/yuenanjiangrangguochengfoot",
      component:()=>import("../components/yuenanjiangrangguochengfoot"),
    },
    {
      //越南后整辅料foot
      path: "/charts",
      name: 'charts',
      component:()=>import("../components/charts"),
    },
    {
      //越南后整辅料foot
      path: "/chart2",
      name: 'chart2',
      component:()=>import("../components/chart2"),
    },
    {
      //韶关环保数据
      path: "/shaoguanhuanbaoshuju",
      component:()=>import("@/components/shaoguanhuanbaoshuju"),
    },
    {
      //i111-测试用的
      path: "/i111",
      component:()=>import("../components/i111"),
    },
    {
      //i1-测试用的
      path: "/i1",
      component:()=>import("../components/i1"),
    },
    {
      //i2-测试用的
      path: "/i2",
      component:()=>import("../components/i2"),
    },
    //图表
    {
      path: "/barCharts",
      name: 'barCharts',
      component:()=>import("../components/barCharts"),
    },
    // {
    //   //默认
    //   path: "*",
    //   redirect: "/login"
    // }
    {
      //默认
      path: "*",
      redirect: "/index"
    },
  ]
})
