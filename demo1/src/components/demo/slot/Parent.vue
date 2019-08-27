<template>
  <div>
    <h2>父组件</h2>
    <children>
      <template v-slot:default>
        <div>
          <p>slot匿名插槽</p>
        </div>
      </template>

      <template v-slot:up>
        <div>
          <p>slot具名插槽 up</p>
        </div>
      </template>

      <template v-slot:down>
        <div>
          <p>slot具名插槽 down</p>
        </div>
      </template>

      <template v-slot:user="slotProps">
        <div>
          <p>slot 作用域插槽</p>
          <p>循环子组件的用户数据：</p>
          <p v-for="item in slotProps.user">{{item}}</p>
        </div>
      </template>
    </children>
  </div>
</template>

<script>
  import Children from './Children'

  export default {
    name: "Parent",
    components: {
      Children
    }
  }
</script>

<style scoped>

</style>
