<template>
  <div class="wrap">
    <div class="mask"></div>
    <div class="box">
      <p>确定删除 {{name}} 吗？</p>
      <button class="ok" @click="deleteUser(true)">确定</button>
      <button class="cancle" @click="deleteUser(false)">取消</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DeleteBox",
    props: ['id', 'name'],
    methods: {
      deleteUser(flag) {
        this.$emit('deleteUser', flag);
      }
    }
  }
</script>

<style scoped>
  .mask{
    width: 100vw;
    height: 100vh;
    background: #000;
    opacity: .3;
    position: absolute;
    top: 0;
    left: 0;
  }

  .box{
    width: 300px;
    height: 150px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 9px;
    text-align: center;
    padding: 30px 20px;
    box-sizing: border-box;
  }

  .box p{
    margin-bottom: 30px;
    color: crimson;
  }

  button{
    display: inline-block;
    width: 50px;
    height: 25px;
    font-size: 14px;
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }

  .ok{
    background: red;
    margin-right: 10px;
  }

  .cancle{
    background: green;
  }

</style>
