<template>
  <div class="app-container">
    11111
  </div>
</template>

<script>
import { getindex } from '@/api/we_service/ctx'

export default {
  data() {
    return {

    }
  },
  created() {
    getindex().then(response => {
      console.log('这里显示的index', response)
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
