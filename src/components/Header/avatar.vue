<template>
  <div id="avatar">
    <img src="@/assets/xsx.jpg"
         alt="头像"
         width="80" />
    <img src="@/assets/music.gif"
         width="30"
         class="music"
         :class="{'rotate': isPlayed}"
         @click="audioClick" />
    <audio ref="player"
           loop>
      <source src="@/assets/audio/never.mp3" />
    </audio>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  public $refs!: {
    player: HTMLAudioElement
  }

  isPlayed: Boolean = false

  audioClick() {
    let audioE = this.$refs.player
    if (audioE.paused) {
      audioE.play()
    } else {
      audioE.pause()
    }
  }

  mounted() {
    let audioE = this.$refs.player
    // 监听是否播放 
    audioE.addEventListener('pause', () => {
      this.isPlayed = false
    })
    audioE.addEventListener('play', () => {
      this.isPlayed = true
    })
    if (!this.$route.params.playAudio) return
    if (audioE.paused) {
      audioE.play()
    } else {
      audioE.pause()
    }


  }
}
</script>

<style lang="scss" scoped>
#avatar {
  position: fixed;
  z-index: 999;
  top: 10px;
  left: 10px;

  img {
    border-radius: 50%;

    &.rotate {
      animation: avatarRotate 5s ease-in-out infinite;
    }
  }
}

.music {
  cursor: pointer;
}

@keyframes avatarRotate {
  0% {
    transform: rotate(0);
  }

  25% {
    transform: rotate(90deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
