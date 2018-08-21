import {getUserInfoByToken, getUserBalance} from '../../api/lottery'
import {removeToken, removeMenus} from '../../utils/auth'

const user = {
  state: {
    userAccount: -1,
    userAmount: '加载中...',
    userId: -1,
    userProxyId: -1
  },
  mutations: {
    setUserAccount: (state, account) => {
      state.userAccount = account
    },
    setUserAmount: (state, amount) => {
      state.userAmount = amount
    },
    setUserId: (state, id) => {
      state.userId = id
    },
    setUserProxyId: (state, id) => {
      state.userProxyId = id
    }
  },
  actions: {
    getAccountInfo: ({commit}, token) => {
      return new Promise((resolve, reject) => {
        getUserInfoByToken({token}).then(res => {
          if (res.currentStatus === 0 && res.currentData && res.currentData.userContext) {
            const {id, parentProxyId, userAccount, userAmount} = res.currentData.userContext
            commit('setUserAccount', userAccount)
            commit('setUserId', id)
            commit('setUserProxyId', parentProxyId)
            resolve()
          } else {
            reject()
          }
        }).catch(err => {
          reject()
        })
      });
    },
    loadUserBalance: ({commit}, userId) => {
      return new Promise((resolve, reject) => {
        const info = {proxyGameUserId: userId}
        getUserBalance(info).then(res => {
          if (res.currentStatus === 0) {
            commit('setUserAmount', res.currentData)
            resolve()
          } else {
            reject(res)
          }
        }).catch(error => {
          reject(error)
        });
      });
    },
    loginOut: ({commit}) => {
      return new Promise((resolve, reject) => {
        commit('setUserAccount', -1)
        commit('setUserAmount', -1)
        commit('setUserId', -1)
        commit('setUserProxyId', -1)
        removeToken()
        removeMenus()
        resolve();
      })
    }
  }
};

export default user;
