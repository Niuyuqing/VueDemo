// export default {
//   incuement({commit}) {
//     setTimeout(() => {
//       commit('INCUEMENT');
//     }, 1000);
//   },
//   decuement({commit}) {
//     setTimeout(() => {
//       commit('DECUEMENT');
//     },1000);
//   }
// }

// 增加复杂度，返回Promise
export default {
  incuementAsync({commit})   {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('INCUEMENT');
        resolve();
      }, 1000);
    })
  },

  decuementAsync({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('DECUEMENT');
        resolve();
      }, 1000);
    })
  }
}


