import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  orders: [
    
    {
      "id": "1",
      "orderNumber": "first order",
      "orderDate": "2019-01-01"
    },
    {
      "id": "2",
      "orderNumber": "Second order",
      "orderDate": "2019-02-02"
    },
    
  ]

};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
