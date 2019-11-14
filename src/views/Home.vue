<template>
  <div class="home">
    <avatar />
    <github />

    <fullpage-bar :options="options"
                  ref="fullpagebar" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Avatar from '@/components/Header/avatar.vue'
import Github from '@/components/Header/github.vue'
import FullpageBar from '@/components/Fullpage/index.vue'

@Component({
  components: {
    Avatar,
    Github,
    FullpageBar
  }
})
export default class Home extends Vue {
  public $refs!: {
    fullpagebar: HTMLDivElement
  }

  private options = {
    licenseKey: null,
    menu: '#menu', // 绑定菜单
    anchors: ['about', 'experience', 'contact'], // 锚连接
    sectionsColor: ['transparent', '#ff5f45', '#0798ec'],
    loopBottom: true, // 底部可以滑到顶部
    navigation: true, // 是否显示导航(小圆点)
    navigationTooltips: ['HOME', 'EXPERIENCE', 'CONTACT']
  }
}
</script>
