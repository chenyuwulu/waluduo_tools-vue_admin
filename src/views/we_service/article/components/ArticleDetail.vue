<template>
  <div class="app-container">
    <el-form ref="postForm" :model="postForm">
      <div style="background:#99ffff;">
        <el-row>
          <el-col :span="24">
            <el-input v-model="article.title" placeholder="请输入标题">
              <div slot="prepend">Title</div>
            </el-input>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import { create } from '@/api/we_service/article'

export default {
  data() {
    return {
      postForm: {},
      article: {}
    }
  },
  created() {
    create({
      a: 1
    }).then(response => {
      console.log('这里显示的create', response)
    })
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
  .app-container {
    width: 100%;
    // .div-table{
    //   width:100%;
    // }
  }
</style>
