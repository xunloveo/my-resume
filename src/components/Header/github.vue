<template>
  <div id="contact-github">
    <a href="https://github.com/xunloveo"
       title="github"
       target="_blank"><img src="@/assets/github.jpg"
           alt="github"
           width="40" /></a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Github'
})
export default class Github extends Vue { }
</script>

<style lang="scss" scoped>
#contact-github {
  position: fixed;
  right: 10px;
  top: 20px;
  z-index: 100;

  img {
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    &:hover {
      transform: scale(1.4) rotate(360deg);
    }
  }
}
</style>
