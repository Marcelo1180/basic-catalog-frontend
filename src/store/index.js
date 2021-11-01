import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {
    initializeStore(state) {},
    setIsLoading(state, status) {
      state.isLoading = status;
    },
  },
  actions: {},
  modules: {},
});
