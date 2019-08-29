<template>
  <div id="contact">
    <a href="https://github.com/xunloveo" title="github" target="_blank"
      ><img src="@/assets/github.jpg" alt="github" width="40"
    /></a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Github'
})
export default class Github extends Vue {}
</script>

<style lang="scss" scoped>
#contact {
  position: fixed;
  right: 10px;
  top: 20px;
  z-index: 100;

  img {
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>
