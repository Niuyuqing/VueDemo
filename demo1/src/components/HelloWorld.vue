<template>
  <div class="hello">
    <p class="control">
      <router-link class="toPage" to="/login">登录</router-link>
      <router-link class="toPage" to="/register">注册</router-link>
    </p>
    <p><router-link to="/count">vuex 测试</router-link></p>
    <p><router-link to="/slot">slot 测试</router-link></p>
    <p><router-link to="/component">component 测试</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .control{
    font-size: 16px;
    text-align: right;
    margin: 5px;
  }

  .toPage:hover{
    cursor: pointer;
    color: green;
  }
</style>
