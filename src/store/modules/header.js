const header = {
  state: {
    leftNavBarShow: false,
    menuShow: false
  },
  mutations: {
    set_leftNavBarShow: (state, val) => {
      state.leftNavBarShow = val
    },
    set_menuShow: (state, val) => {
      state.menuShow = val
    }
  },
  actions: {
    setLeftNavBarShow: ({commit}, val) => {
      commit('set_leftNavBarShow', val)
    },
    setMenuShow: ({commit}, val) => {
      commit('set_menuShow', val)
    }
  }
};

export default header;
