<template>
  <div class="education-bar">
    <div class="education-wrap">
      <div class="item">
        <div class="item-title">学校：</div>
        <div class="item-content">东华理工大学</div>
      </div>
      <div class="item">
        <div class="item-title">专业：</div>
        <div class="item-content">软件工程</div>
      </div>
      <div class="item">
        <div class="item-title">证书：</div>
        <div class="item-content">大学英语四级</div>
      </div>
      <div class="item desc">
        <div class="item-title">描述：</div>
        <div class="item-content fn">在校担任宣传委员，并且荣获"优秀班干部"，荣获院校奖学金，英语过了四级，参加过许多实践活动，如百里践行，和同学，老师共同做过项目，喜欢和技术人士交流，学习更多的知识，喜欢阅读相关书籍！</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.education-bar {
  height: calc(100vh - 220px);
  overflow: auto;
  .education-wrap {
    min-height: 360px;
  }
  .item {
    display: flex;
    line-height: 60px;
    &.desc {
      line-height: 40px;
    }
    .item-title {
      width: 100px;
      color: #999;
    }
    .item-content {
      flex: 1;
      text-align: left;
      font-weight: bold;

      &.fn {
        font-weight: normal;
        font-size: 1.8rem;
      }
    }
  }
}
</style>