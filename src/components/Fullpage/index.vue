<template>
  <div class="fullpage-bar">
    <ul id="menu">
      <li data-menuanchor="about"
          class="active"><a href="#about">HOME</a></li>
      <li data-menuanchor="experience"><a href="#experience">EXPERIENCE</a></li>
      <li data-menuanchor="contact"><a href="#contact">CONTACT</a></li>
    </ul>
    <full-page ref="fullpage"
               id="fullpage"
               :options="options">
      <div class="section">
        <first-screen />
        <vue-particles color="#dedede"
                       class="particles-js" />
      </div>
      <div class="section experience-section">
        <experience></experience>
        <!-- <div class="prev"
             @mouseenter="stop"
             @mouseleave="start"
             @click="moveSlideLeft">
          <svg width="60px"
               height="80px"
               viewBox="0 0 50 80"
               xml:space="preserve">
            <polyline fill="none"
                      stroke="#FFFFFF"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      points="45.63,75.8 0.375,38.087 45.63,0.375 "></polyline>
          </svg>
        </div>
        <div class="next"
             @mouseenter="stop"
             @mouseleave="start"
             @click="moveSlideRight">
          <svg xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink"
               width="60px"
               height="80px"
               viewBox="0 0 50 80"
               xml:space="preserve">
            <polyline fill="none"
                      stroke="#FFFFFF"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      points="0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
          </svg>
        </div>
        <div class="slide">slide 1</div>
        <div class="slide">slide 2</div>
        <div class="slide">slide 3</div> -->
      </div>
      <div class="section">
        <contact></contact>
      </div>
    </full-page>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FirstScreen from './firstScreen.vue'
import Experience from './experience.vue'
import Contact from './contact.vue'

@Component({
  name: 'Fullpage',
  components: {
    FirstScreen,
    Experience,
    Contact
  }
})
export default class Fullpage extends Vue {
  @Prop({ required: true }) private options!: object

  public $refs!: {
    // fullpage: HTMLDivElement
    fullpage: any
  }

  private timer: number | null = null

  private api: any = null

  moveSlideLeft() {
    this.api.moveSlideLeft()
  }

  moveSlideRight() {
    this.api.moveSlideRight()
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  start() {
    if (this.timer) clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.api.moveSlideRight()
    }, 3000)
  }

  mounted() {
    this.api = this.$refs.fullpage.api
    this.timer = setInterval(() => {
      this.api.moveSlideRight()
    }, 3000)
  }

  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }

    this.api.destroy()
  }
}
</script>

<style lang="scss">
.fullpage-bar {
  height: 100vh;

  #menu {
    width: 100%;
    position: fixed;
    top: 20px;
    z-index: 99;
    font-size: 1.1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #menu li {
    margin: 10px 0;
  }

  #menu li a {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    padding: 0 1.1em 1.1em 1.1em;
    position: relative;
  }

  #menu li.active a::after {
    content: '';
    margin: 0 1.1em 0 1.1em;
    height: 2px;
    background: #fff;
    display: block;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }

  .section {
    text-align: center;
    font-size: 2rem;
  }

  .prev,
  .next {
    position: absolute;
    width: 70px;
    height: 90px;
    cursor: pointer;
    z-index: 10;
    top: 50%;
    margin-top: -45px;

    svg {
      padding: 5px;

      &:hover polyline {
        stroke-width: 6px;
      }
    }
  }

  .prev {
    left: 35px;
  }

  .next {
    right: 35px;
  }

  .fp-controlArrow.fp-prev,
  .fp-controlArrow.fp-next {
    border: 0 none;
  }

  polyline {
    transition: all 250ms ease-in-out;
    stroke-width: 3px;
  }

  .particles-js {
    background-image: url('../../assets/sky.jpg');
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .container {
    color: #fff;
    position: relative;
    z-index: 999;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .experience-section {
    background: url(../../assets/experience.png);
  }
}
</style>
