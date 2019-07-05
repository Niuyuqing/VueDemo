export default {
  users(state) {
    return state.users;
  },

  constellations(state) {
    return state.constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];
  },

  address(state) {
    return state.address = ['江苏省', '内蒙古', '黑龙江', '沈阳', '北京', '厦门', '台湾'];
  },

  hobbies(state) {
    return state.hobbies = ['打篮球', '画画', '唱歌', '读书'];
  }
}
