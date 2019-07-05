<template>
  <div class="login">
    <div class="form">
      <p>
        <span>用户名：</span>
        <input type="text" v-model="username">
      </p>
      <p>
        <span>密  码：</span>
        <input type="password" v-model="pwd">
      </p>
      <p class="error" v-show="(username && pwd) == ''">请输入用户名和密码！</p>
      <p>
        <button @click="login">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        pwd: ''
      }
    },
    methods: {
      login() {
        if ((this.username && this.pwd) != '') {
          this.$router.push({
            name: 'User',
            params: {username: this.username}
          });
        }
      }
    }
  }
</script>

<style scoped>
  .error {
    color: darkred;
    margin-top: 20px;
    font-size: 14px;
    font-weight: bold;
  }

  .login {
    width: 100vw;
    height: 100vh;
    background: antiquewhite;
    padding-top: 250px;
    box-sizing: border-box;
  }

  .form {
    width: 500px;
    text-align: center;
    margin: 0 auto;
    padding: 50px 0 10px;
    box-sizing: border-box;
    border-radius: 5px;
    background: burlywood;
  }

  .form p {
    margin-bottom: 10px;
  }

  .form span {
    display: inline-block;
    width: 70px;
    text-align: left;
  }

  .form input {
    display: inline-block;
    width: 180px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0 5px;
    box-sizing: border-box;
  }

  button {
    display: inline-block;
    width: 80px;
    height: 25px;
    border: none;
    border-radius: 5px;
    background: darkolivegreen;
    color: #ffffff;
    cursor: pointer;
  }
</style>
