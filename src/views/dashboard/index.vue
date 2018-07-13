<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  created() {
    console.log(this.API)
    // API 请求
    // 1. 在src/api 里创建一条记录
    // 2. data 下创建一个对应的 mock
    // 3. 任何 VUE 实例/组件 能直接访问到所有的 API
    this.API.getUser({
      data: {
        admin: 1,
        pwd: 2
      }
    }).then((res) => {
      console.log('====== API RESPONSE ======')
      console.log(res)
      console.log('====== END API RESPONSE ======')
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
