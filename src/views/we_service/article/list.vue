<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span @click="yes(scope.row)">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="发布时间">
        <template slot-scope="scope">
          <span>{{ scope.row.publish_time }}</span>
        </template>
      </el-table-column>
      <el-table-column width="120px" align="center" label="作者">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="内容">
        <template slot-scope="scope">
          <span>{{ scope.row.ctx }}</span>
        </template>
      </el-table-column>
      <el-table-column width="180px" align="center" label="创建时间">
        <template slot-scope="scope">
          <span>{{ scope.row.createtime }}</span>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getLists"
    />
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
    getlist().then(response => {
      console.log('这里显示的list', response)
      this.list = response.data.list
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
