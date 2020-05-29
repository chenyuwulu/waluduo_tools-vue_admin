<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
// 这里是公共css库
  .box{
    display: flex;
    padding: 20px 20px;
  }
</style>