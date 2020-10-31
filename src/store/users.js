import getUsersService from '../services/getUserService'

export default {
  namespace: true,
  state: {
    users: []
  },
  getters: {
    users: state => {
      return state.users
    }
  },
  mutations: {
    SET_USERS: (state, payload) => {
      state.users = payload
    }
  },
  actions: {
    LOAD_USERS: async ({ commit }) => {
      const data = await getUsersService()
      commit('SET_USERS', data)
    }
  }
}
