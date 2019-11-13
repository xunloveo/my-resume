<template>
  <keep-alive>
    <el-tabs type="border-card"
             class="experience">
      <el-tab-pane label="Education Experience">
        <education></education>
      </el-tab-pane>
      <el-tab-pane label="Work Experience">
        <work></work>
      </el-tab-pane>
    </el-tabs>
  </keep-alive>
</template>

<script>
import Education from './education.vue'
import Work from './work.vue'
export default {
  name: 'Experience',
  components: {
    Education,
    Work
  }
}
</script>

<style lang="scss">
.experience {
  width: 80%;
  height: calc(100% - 180px);
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  overflow: hidden;

  .el-tabs__header {
    .el-tabs__item {
      font-size: 20px;
    }
  }
}
</style>