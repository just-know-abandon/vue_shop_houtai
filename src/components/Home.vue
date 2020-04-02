<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      // window.sessionStorage.clear()111
      this.$message({
        message: '退出登录',
        duration: 2000
      })
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scope>
</style>
