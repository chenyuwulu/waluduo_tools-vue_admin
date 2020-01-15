<template>
  <div class="app-container">
    这里是list页面
  </div>
</template>

<script>
import { getlist } from '@/api/we_service/article'

export default {
  data() {
    return {

    }
  },
  created() {
    getlist().then(response => {
      console.log('这里显示的list', response)
    })
  },
  methods: {
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
