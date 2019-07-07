<template>
  <div>
    <h2>父组件</h2>
    <ul>
      <template v-for="item in list">
        <li @click="btnCli(item)">{{item}}</li>
      </template>
    </ul>

    <Child :is="showFlag"></Child>
    <ComponentB :is="showFlag"></ComponentB>
    <ComponentA is="ComponentB"></ComponentA>
  </div>
</template>

<script>
  import Child from './Child'
  import ComponentA from './ComponentA'
  import ComponentB from './ComponentB'

  export default {
    name: "Parent",
    components: {
      Child,
      ComponentA,
      ComponentB
    },
    data() {
      return {
        showFlag: 'Child',
        list: ['Child', 'ComponentA', 'ComponentB']
      }
    },
    methods: {
      btnCli(name) {
        this.showFlag = name;
      }
    }
  }
</script>

<style scoped>
  ul{
    display: inline-flex;
    border: 1px solid gray;
  }
  li{
    cursor: pointer;
    width: 200px;
    text-align: center;
  }
  li:hover{
    background: burlywood;
  }
</style>
