<template>
    <el-row>
        <el-col class="col1" :span="10" :xs="24">
            <div class="editor-box">
                <el-input type="textarea" resize='none' :rows="2" placeholder="what's news today?" v-model="twitterText">
                </el-input>
                <div style="text-align:right">
                    <el-button type="primary" size='mini'>发布</el-button>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
  data() {
    return { 
      twitterText: ""
    };
  },
  mounted() {
      
  },
};
</script>
<style lang="scss" scoped>
.col1 {
  background-color: #fff;
  .editor-box {
    box-shadow: $shadow;
    border: 1px solid $borderColor;
    padding: $cardPadding;
    /deep/ textarea{
        border: none;
        padding: 0;
        // border-bottom: 1px solid $asideDevider;
    }
  }
}
</style>

