<template>
  <el-carousel indicator-position="outside"
               :autoplay="false"
               :height="height">
    <el-carousel-item v-for="item in workData"
                      :key="item.name">
      <div class="workitem">
        <div class="workitem-title">公司:</div>
        <div class="workitem-content">{{item.company}}</div>
        <div class="workitem-time">{{item.time}}</div>
      </div>
      <div class="workitem">
        <div class="workitem-title">名称:</div>
        <div class="workitem-content">{{item.name}}</div>
      </div>
      <div class="workitem">
        <div class="workitem-title">职责:</div>
        <div class="workitem-content">{{item.duty}}</div>
      </div>
      <div class="workitem desc">
        <div class="workitem-title">内容:</div>
        <div class="workitem-content fn">{{item.content}}</div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      height: '300px',
      workData: [{
        name: '肺结核智慧筛查平台',
        company: '江西中科九峰智慧医疗科技有限公司',
        time: '2019.06-至今',
        duty: '前端负责人',
        content: '使用 vue-cli 搭建的 vue 项目，UI 库是饿了么团队开发的 Element-ui。使用 vue-router 实现路由的跳转，并且实现的是动态路由；使用 vuex 来管理数据；使用 scss 预处理；使用 axios 实现前后台交互，并且对 axios 进行次封装；对 ui 库组件也进行了二次封装，并且封装常用组件；使用 vue-i18n 进行国际化交互。我作为前端项目负责人，搭好架子，分配给组员，分工合作明确。'
      },
      {
        name: '数据分析平台',
        company: '江西中科九峰智慧医疗科技有限公司',
        time: '2019.03-2019.05',
        duty: '核心开发者',
        content: '此项目是为了展示公司业务的数据，分为公司内部大屏幕，罗甸大屏幕，张家口大屏幕，浙江大屏幕四大块。项目使用的是 vue+echarts + axios 以及 jquery + echarts 开发的，这些项目前端部分是由我一个人完成的，从搭建到打包部署。项目中把公共的 resize,refresh 方法放入到 mixins 中,以便代码重复使用，并且封装方法，方便多次使用。'
      },
      {
        name: '影像质控系统',
        company: '江西中科九峰智慧医疗科技有限公司',
        time: '2019.01-2019.03',
        duty: '前端负责人',
        content: '此项目是为了显示 AI 质控的能力，基于 vue.js 开发，采用 less 预处理，简易封装根据盒子宽高，图片原大小宽高对图片进行相应的缩放方法，使用 svg 实现 2 色圆环动态旋转，封装常用的 ui 组件，使用 axios 进行后台对接，并 2 次封装。'
      },
      {
        name: '九峰医学影像远程智慧诊断平台',
        company: '江西中科九峰智慧医疗科技有限公司',
        time: '2018.07-2018.12',
        duty: '前端负责人',
        content: '实习的时候负责过日志，菜单管理等模块。后面由我负责进行重构，使用的是 vue-cli 搭建的，主要把公用部分抽离出来，封装常用方法以及一些常用组件，减少代码量，路由使用的是动态路由，权限认证并且使用异步路由，css 预处理器使用的是 scss，使用 axios 获取数据，并对它进行再次封装，请求拦截以及响应拦截，将图片转换成 svg 或者字体图标库，优化性能。此项目一直在重构中。'
      }],
    }
  },
  mounted () {
    let h = document.documentElement.offsetHeight
    this.height = (h - 300) + 'px'

  }
}
</script>

<style>
.el-carousel__item {
  min-height: 360px;
}
</style>

<style lang="scss" scoped>
.workitem {
  display: flex;
  text-align: left;
  line-height: 50px;
  &.desc {
    line-height: 40px;
  }
  .workitem-time {
    padding-right: 4px;
    color: #999;
    font-size: 1.6rem;
    font-style: italic;
  }
  .workitem-title {
    margin-right: 10px;
    color: #999;
  }
  .workitem-content {
    flex: 1;
    font-weight: bold;

    &.fn {
      font-weight: normal;
      font-size: 1.6rem;
    }
  }
}
</style>