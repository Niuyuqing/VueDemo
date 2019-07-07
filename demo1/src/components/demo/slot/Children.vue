<template>
  <div>
    <h2>子组件</h2>
    <slot></slot>
    <slot name="up"></slot>
    <slot name="down"></slot>
    <br>
    <slot name="user" :user="msg">

    </slot>
  </div>
</template>

<script>
  export default {
    name: "SlotDemo",
    data() {
      return{
        msg: ['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
      }
    }
  }
</script>

<style scoped>

</style>
