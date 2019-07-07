<template>
  <div>
    <p class="welcome">欢迎，
      <span class="username">{{$route.params.username}}</span>登录！
    </p>

    <div class="wrap">
      <button class="search" @click="getUsers">查询所有用户</button>
      <button class="search" @click="addUser">添加用户</button>
      <div class="box">
        <ul class="title">
          <li>ID序号</li>
          <li>姓名</li>
          <li>性别</li>
          <li>星座</li>
          <li>地址</li>
          <li>爱好</li>
          <li>功能</li>
        </ul>
        <ul class="msg" v-for="user in users">
          <li>{{user.id}}</li>
          <li>{{user.name}}</li>
          <li>{{user.sex}}</li>
          <li>{{user.constellation}}</li>
          <li>{{user.address}}</li>
          <li>{{user.hobby}}</li>
          <button @click="deleteBox(true, user.id, user.name)">删除</button>
          <button @click="updateUser(user.id)">修改</button>
        </ul>
      </div>

      <form-box v-if="showForm" @closeForm="closeForm1" ref="formbox" :title="title" :id="nowUser.id"></form-box>
      <delete-box v-if="showDel" @deleteUser="deleteUser1" :id="nowUser.id" :name="nowUser.name"></delete-box>
    </div>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
  import FormBox from './FormBox'
  import DeleteBox from './DeleteBox'

  export default {
    name: "User",
    data() {
      return {
        showForm: false,
        showDel: false,
        nowUser: {
          id: '',
          name: ''
        },
        title: ''
      }
    },
    components: {
      FormBox,
      DeleteBox
    },
    methods: {
      ...mapActions('user', ['getUsersAction']),

      getUsers() {
        this.getUsersAction();
      },

      addUser() {
        this.title = '添加用户';
        this.showForm = true;
      },

      closeForm1(res) {
        this.showForm = res;
      },

      /**
       * 删除提示框
       * @param res
       */
      deleteBox(res, id, name) {
        this.nowUser.id = id;
        this.nowUser.name = name;
        this.showDel = res;
      },

      /**
       * 删除用户
       * @param res
       */
      deleteUser1(res) {
        if (res) {
          this.users.splice(this.users.findIndex((value, index, arr) => value.id === this.nowUser.id), 1);
        }

        this.showDel = false;
      },

      updateUser(id) {
        this.title = '修改用户信息';
        this.nowUser.id = id;
        this.showForm = true;

        // 注意，获取this.$refs一定要放在定时器里
        // setTimeout(() => {
        //   this.$refs.formbox.updateUser(this.nowUser.id);
        // }, 0);

      }
    },
    computed: {
      // ...mapState('user', ['users'])

      ...mapGetters('user', ['users'])
    }
  }
</script>

<style scoped>
  .welcome {
    text-align: right;
    margin: 5px 5px 0 0;
  }

  .username {
    color: chocolate;
    font-weight: bold;
  }

  .wrap {
    padding: 20px;
    box-sizing: border-box;
  }

  .search, button {
    padding: 5px 20px;
    border: none;
    border-radius: 5px;
    background: chocolate;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
  }

  .box {
    margin-top: 10px;
  }

  .title {
    background: burlywood;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }

  ul {
    display: flex;
    background: darkolivegreen;
    color: #ffffff;
    padding: 10px 0;
  }

  li {
    width: 180px;
    text-align: center;
    height: 30px;
    line-height: 30px;
  }

  button {
    margin-right: 10px;
  }
</style>
