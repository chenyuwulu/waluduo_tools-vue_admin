<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <div @click="yes(scope.row)" slot-scope="obj">
          {{obj.row.id}}
        </div>
      </el-table-column>
      <el-table-column width="180px" align="center" label="发布时间">
        <div slot-scope="obj">
          {{obj.row.publish_time}}
        </div>
      </el-table-column>
      <el-table-column width="120px" align="center" label="作者">
        <div slot-scope="obj">
          {{obj.row.author}}
        </div>
      </el-table-column>
      <el-table-column align="center" label="内容">
        <div slot-scope="obj" v-html="obj.row.ctx"></div>
      </el-table-column>
      <el-table-column width="180px" align="center" label="创建时间">
        <div slot-scope="obj">
          {{obj.row.createtime}}
        </div>
      </el-table-column>
    </el-table>
    <!-- 翻页组件 -->
    <pagination
      v-if="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getLists" />
  </div>
</template>

<script>
import { getlist } from '@/api/we_service/article'
import Pagination from '@/components/Pagination'

export default {
  name: 'List',
  components: {
    pagination: Pagination
  },
  data() {
    return {
      total: 0,
      listQuery: {
        page: 1,
        limit: 20
      },
      list: null,
      listLoading: true
    }
  },
  created() {
    getlist().then(res => {
      console.log('这里显示的list', res)
      this.list = res.data.list
      this.listLoading = false
    })
  },
  methods: {
    getLists(e) {
      console.log(e)
    },
    yes(e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-container {
    width: 100%;
    .div-table{
      width:100%;
    }
  }
</style>
