const load = {
  state: {
    isLoading: false
  },
  mutations: {
    set_isLoad: (state, val) => {
      state.isLoading = val
    }
  },
  actions: {
    setIsLoading: ({commit}, val) => {
      commit('set_isLoad', val)
    }
  }
};

export default load;
