import routeAPI from "./config-api-route";

export const state = () => ({
    list: [],
    info: {},
});

export const getters = ({
    list: (state) => state.list,
    info: (state) => state.info,
});

export const mutations = ({
    resData(state, data) {
        state.list = data;
    },
    resInfo(state, data) {
        state.info = data;
    },
    clear(state) {
        state.list = []
    },
});

export const actions = {
    clear({ commit }) {
        commit('clear')
    },
    async getDataList({ commit }, params) {
        var queryString = Object.keys(params).map(function (key) {
            if (params[key] == null) params[key] = "";
            return key + '=' + params[key]
        }).join('&');

        console.log(queryString);


        const url = routeAPI.receiver.main + "?" + queryString;
        const config = { headers: { Authorization: this.$auth.getToken('local') } }
        const res = await this.$axios.$get(url, config);
        commit('resData', res)
    },
    async getInfo({ commit }, { id }) {
      const url = routeAPI.receiver.main + "/" + id;
      const config = { headers: { Authorization: this.$auth.getToken('local') } }
      const res = await this.$axios.$get(url, config);
      commit('resInfo', res.data)
  },
    async update({ commit }, params) {
      console.log(params);
      console.log(params.id);
      console.log(params.description);
        const url = routeAPI.receiver.main + "/" + params.id;
        const config = { headers: { Authorization: this.$auth.getToken('local') } }
        const res = await this.$axios.$put(url, params, config);
        return res;
    },
};
