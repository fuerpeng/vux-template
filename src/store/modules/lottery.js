import {getGameList} from '../../api/lottery'
import {setMenus, getMenus} from '../../utils/auth'

/*function generateMenuList(arr) {
 let tempArr = [];
 arr.forEach(item => {
 if (item.childrenList) {
 tempArr = tempArr.concat(item.childrenList);
 }
 });
 return tempArr;
 }*/

const lottery = {
  state: {
    lotteryCode: '',
    lotteryMenus: [],
    lotteryId: -1,
    lotteryGroupId: -1,
    lotteryName: '',
  },
  mutations: {
    set_lotteryCode: (state, code) => {
      state.lotteryCode = code
    },
    set_lotteryMenus: (state, menus) => {
      state.lotteryMenus = menus
    },
    set_lotteryId: (state, id) => {
      state.lotteryId = id
    },
    set_lotteryGroupId: (state, id) => {
      state.lotteryGroupId = id
    },
    set_lotteryName: (state, name) => {
      state.lotteryName = name
    }
  },
  actions: {
    setLotteryCode: ({commit}, code) => {
      commit('set_lotteryCode', code)
    },
    setlotteryMenus: ({commit}, menus) => {
      commit('set_lotteryMenus', menus)
    },
    setlotteryId: ({commit}, id) => {
      commit('set_lotteryId', id)
    },
    setlotteryGroupId: ({commit}, id) => {
      commit('set_lotteryGroupId', id)
    },
    setlotteryName: ({commit}, name) => {
      commit('set_lotteryName', name)
    },
    generateRoutes: ({commit}) => {
      return new Promise((resolve, reject) => {
        const menus = getMenus();
        if (menus) {
          commit('set_lotteryMenus', menus);
          resolve(menus);
        } else {
          getGameList().then(res => {
            let {currentStatus, currentData} = res;
            if (currentStatus === 0) {
              if (currentData && currentData instanceof Array) {
                currentData=currentData.map(item=>{
                  item.isShow=false;
                  return item;
                });
                commit('set_lotteryMenus', currentData);
                setMenus(currentData);
                resolve(currentData);
              } else {
                reject('is not array')
              }
            } else {
              reject('response is not success')
            }
          }).catch(err => {
            reject(err);
          })
        }
      })
    }
  }
};

export default lottery;
