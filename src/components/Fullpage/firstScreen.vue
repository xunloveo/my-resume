<template>
  <div class="container">
    <transition name="el-zoom-in-top"
                appear>
      <el-card class="goodness">
        <div slot="header">
          <span>个人优势</span>
        </div>
        <div v-for="(goodness, index) in goodnessListData"
             :key="goodness">
          {{ index + 1 }}. {{ goodness }}
        </div>
      </el-card>
    </transition>
    <vue-typed-js :strings="myIntro"
                  :contentType="'html'"
                  :showCursor="false"
                  class="intro">
      <h2 class="typing"></h2>
    </vue-typed-js>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'FirstScreen'
})
export default class FirstScreen extends Vue {
  showGood: boolean = false
  goodnessListData: string[] = [
    '熟悉Vue框架的使用，了解React，TypeScript等前端语言',
    '具备良好的编程能力与习惯，能快速开发',
    '团队合作能力强，能有效地进行团队沟通，协作',
    '能及时适应环境，快速融入团队',
    '担任过宣传委员，性格活泼开朗，善于交流',
    '有着良好的学习能力'
  ]
  myIntro: string[] = [`<p>我的名字叫</p><p><em style='color: #10f16ca3;'>谢世勋</em></p><p>是一名</p><p style='color: #38180ae0;'>web前端开发</p><p style='color: #38180ae0;'>工程师</p>`]

}
</script>

<style lang="scss">
.container {
  display: flex;
  box-sizing: border-box;
  padding-top: 50px;
  transform-style: preserve-3d;

  .goodness {
    flex: 2;
    text-align: left;
  }

  .intro {
    flex: 1;
    justify-content: center;
  }

  .el-zoom-in-top-enter-active,
  .el-zoom-in-top-leave-active {
    transition: all 3s;
  }
}
</style>