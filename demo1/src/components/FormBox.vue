<template>
  <div class="wrapper">
    <div class="mask"></div>
    <div class="box">
      <p class="title">{{title}}</p>
      <i class="close iconfont icon-cross-fill" @click="closeForm"></i>
      <div class="form">
        <p>
          <span>姓名：</span>
          <input type="text" v-model="username" placeholder="请输入姓名">
        </p>
        <p>
          <span>性别：</span>
          <select name="" id="" v-model="sex">
            <option value="">请选择性别</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </p>
        <p>
          <span>星座：</span>
          <select v-model="constellation">
            <option value="">请选择星座</option>
            <option v-for="con in constellations" v-bind:value="con">{{con}}</option>
          </select>
        </p>
        <p>
          <span>地址：</span>
          <select name="" v-model="address1">
            <option value="">请选择地址</option>
            <option v-for="addr in address" v-bind:value="addr">{{addr}}</option>
          </select>
        </p>
        <p>
          <span>爱好：</span>
          <select name="" v-model="hobby1">
            <option value="">请选择爱好</option>
            <option v-for="hobby in hobbies" v-bind:value="hobby">{{hobby}}</option>
          </select>
        </p>
        <button class="commit" @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "FormBox",
    data() {
      return {
        username: '',
        sex: '',
        constellation: '',
        address1: '',
        hobby1: '',
      }
    },
    props: {
      title: String,
      id: String
    },
    watch: {
      id: {
        immediate: true,
        handler: function (newVal, oldVal) {
          this.showUser(newVal);
        }
      }
    },
    methods: {
      closeForm() {
        this.$emit('closeForm', false);
      },

      submit() {
        if(this.id) {
          this.users.map((value, index, array) => {
            if (value.id == this.id) {
              value.name = this.username;
              value.sex = this.sex;
              value.constellation = this.constellation;
              value.address = this.address1;
              value.hobby = this.hobby1;
            }
          });
        } else {
          this.users.push({
            name: this.username,
            sex: this.sex,
            constellation: this.constellation,
            address: this.address1,
            hobby: this.hobby1
          });
        }

        this.$emit('closeForm', false);
      },

      showUser(id) {
        this.users.map((value, index, array) => {
          if (value.id == id) {
            this.username = value.name;
            this.sex = value.sex;
            this.constellation = value.constellation;
            this.address1 = value.address;
            this.hobby1 = value.hobby;
          }
        });
      }
    },
    computed: {
      ...mapState('user', ['users', 'constellations', 'address', 'hobbies'])
    }
  }
</script>

<style scoped>
  @import "../assets/font/iconfont.css";

  .close {
    position: absolute;
    right: 20px;
    top: 25px;
    font-size: 16px;
    cursor: pointer;
  }

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: .3;
  }

  .box {
    width: 450px;
    height: 400px;
    background: darkgreen;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    padding: 20px;
    color: #fff;
  }

  .title {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .form {
    padding: 30px 35px;
  }

  .form p {
    margin-bottom: 20px;
  }

  input, select {
    display: inline-block;
    width: 300px;
    height: 30px;
    border: 1px solid darkgray;
    border-radius: 5px;
    font-size: 14px;
    box-sizing: border-box;
  }

  input {
    padding: 0 10px;
  }

  .commit {
    display: block;
    width: 60px;
    height: 30px;
    margin: 0 auto;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }
</style>
