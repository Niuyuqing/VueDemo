import axios from 'axios'
import Mock from 'mockjs'

export default {
  getUsersAction(context) {
    let Random = Mock.Random;

    Random.extend({
      constellation: function (date) {
        // let constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']

        return this.pick(context.state.constellations)
      },

      sex: function (data) {
        let sexs = ['男', '女'];
        return this.pick(sexs);
      },

      hobby: function (data) {
        let hobbies = ['打篮球', '画画', '唱歌', '读书', '看电视'];
        return this.pick(hobbies);
      }
    });

    Mock.mock('http://localhost:8001', 'get', {
      'user|3-10': [
        {
          id: '@id',
          name: '@CNAME',
          sex: '@SEX',
          constellation: '@constellation',
          address: '@city',
          hobby: '@hobby'
        }
      ]
    });

    axios({
      url: 'http://localhost:8001',
      method: 'get',
    }).then((res) => {
      console.log(res.data);
      context.commit('getUsers', res.data.user);
    });
  }
}
