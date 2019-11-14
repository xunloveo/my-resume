<template>
  <div class="contact">
    <div class="contact-bg">
      <div class="contact-wrap">
        <h3>如果您对我感兴趣，请联系我！</h3>
        <div class="contact-bar">
          <div class="contact-item">
            <div>
              <div class="w100"><span class="iconfont icon">&#xe61a;</span></div>
              <div class="w100">18720369268</div>
            </div>
          </div>
          <div class="contact-item">
            <div>
              <div class="w100"><span class="iconfont icon">&#xe635;</span></div>
              <div class="w100">xieshixun520@gmail.com</div>
            </div>
          </div>
          <div class="contact-item">
            <div>
              <div class="w100"><span class="iconfont icon">&#xe60d;</span></div>
              <div class="w100">1285302438</div>
            </div>
          </div>
          <div class="contact-item">
            <div>
              <div class="w100"><span class="iconfont icon">&#xe60c;</span></div>
              <div class="w100">xieshixun520</div>
            </div>
          </div>
        </div>
        <div class="rate-bar">
          <p class="rate-title">亲，既然来都来了 请给我打个分吧！！！！！</p>
          <el-rate v-model="rateVal"
                   :colors="colors"
                   allow-half>
          </el-rate>
          <count-to :start-val="0"
                    :end-val="formatRateVal"
                    :duration="2000"
                    :style="styleObj"
                    class="rateCount" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  data () {
    return {
      rateVal: 4,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  computed: {
    formatRateVal () {
      return this.rateVal * 20
    },
    styleObj () {
      if (this.formatRateVal >= 0 && this.formatRateVal <= 40) {
        return { 'color': '#99A9BF' }
      } else if (this.formatRateVal > 40 && this.formatRateVal <= 70) {
        return { 'color': '#F7BA2A' }
      } else {
        return { 'color': '#FF9900' }
      }
    }
  },
  watch: {
    formatRateVal (val) {
      localStorage.setItem('rate', val)
    }
  },
  components: {
    CountTo
  },
  created () {
    let rate = localStorage.getItem('rate')
    if (rate) {
      this.rateVal = rate / 20
    }
  }
}
</script>

<style lang="scss">
.el-rate {
  height: 40px;
  margin-bottom: 20px;
}
.el-rate__icon {
  font-size: 40px;
}
</style>
<style lang="scss" scoped>
.w100 {
  width: 100%;
}
.contact {
  background: url(../../assets/contact-bg.jpg) top center;
  background-size: cover;
  height: 100vh;

  .contact-bg {
    height: 100%;
    background: rgba(34, 34, 34, 0.9);

    position: relative;

    .contact-wrap {
      position: absolute;
      top: 100px;
      width: 80%;
      max-width: 1200px;
      left: 50%;
      transform: translate(-50%, 0);
      color: #fff;

      h3 {
        color: #2dee16;
      }

      .contact-bar {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .contact-item {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 200px;
          height: 200px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          word-break: break-all;
          .icon {
            font-size: 40px;
          }
        }
      }
    }

    .rate-bar {
      margin-top: 30px;

      .rate-title {
        line-height: 80px;
        color: #ff9900;
      }

      .rateCount {
        font-size: 3rem;
        font-weight: bold;
      }
    }
  }
}
</style>