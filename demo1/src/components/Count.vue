<template>
  <div>
    <p>{{count}}</p>
    <p>{{countNum}}</p>
    <button @click="add">加</button>
    <button @click="del">减</button>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

  export default {
    name: "Count",
    data() {
      return {
        countNum: this.$store.state.count
      }
    },
    methods: {
      ...mapMutations(['INCUEMENT', 'DECUEMENT']),
      // ...mapActions(['incuement', 'decuement'])
      ...mapActions(['incuementAsync', 'decuementAsync']),
      add() {
        this.incuementAsync().then(() => {
        })
      },

      del() {
        this.decuementAsync().then(() => {
        })
      }
    },
    computed: {
      // 原始用法，不实用mapState
      // count() {
      //   return this.$store.state.count;
      // },

      ...mapState({
        // mapState的三种使用方法
        // count: 'count',

        // count: (state) => state.count

        // count: function (state) {
        //   return state.count;
        // }
      }),

      ...mapGetters(['count'])
    }
  }
</script>

<style scoped>
  button {
    display: inline-block;
    width: 60px;
    height: 20px;
  }
</style>
