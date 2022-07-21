import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    projects: null
  },
  getters: {},
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    }
  },
  actions: {
    getProjects: async (context) => {
      fetch(`http://localhost:3000/projects`)
        .then((res) => res.json())
        .then((projects) => context.commit("setProjects", projects))
    }
  },
  modules: {}
})