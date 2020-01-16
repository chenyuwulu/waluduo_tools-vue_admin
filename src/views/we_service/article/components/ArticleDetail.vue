<template>
  <div class="app-container">
    <el-form ref="postForm" :model="postForm">
      <div>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="24">
            <el-input v-model="article.title" placeholder="请输入标题">
              <div slot="prepend">标题</div>
            </el-input>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="12">
            <el-input v-model="article.author" placeholder="请输入作者">
              <div slot="prepend">作者</div>
            </el-input>
          </el-col>
          <el-col :span="12" style="display:flex;justify-content: center;">
            <el-date-picker
              v-model="article.publish_time"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择发表时间"
            />
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="24">
            <Tinymce ref="editor" v-model="article.ctx" :height="400" />
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 20px;">
          <el-col :span="24">
            <el-button type="primary" @click="tui">提交</el-button>
          </el-col>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
import { play_post } from '@/api/we_service/article'

export default {
  name: 'ArticleDetail',
  components: {
    Tinymce: Tinymce
  },
  data() {
    return {
      postForm: {},
      article: {}
    }
  },
  created() {
  },
  methods: {
    tui(e) {
      // console.log(this)
      // this.$alert('这是一段内容', '标题名称', {
      //   confirmButtonText: '确定',
      //   callback: action => {
      //     this.$message({
      //       type: 'info',
      //       message: `action`
      //     })
      //   }
      // })
      play_post(this.article).then(response => {
        console.log('这里显示的create', response)
      })
    }
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
