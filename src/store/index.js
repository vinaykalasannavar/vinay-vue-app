import Vue from "vue";
import Vuex from "vuex";
import { ordersDataService } from "../common";
import { GET_ORDERS } from "./mutation-types";

Vue.use(Vuex);

const state = {
  orders: []
};
const mutations = {
  /* Property syntax "[GET_ORDERS]" for function name */
  [GET_ORDERS](state, orders) {
    state.orders = orders;
  }
};
const actions = {
  async getOrdersAction({ commit }) {
    // const ding1 = 1000;
    // console.log(ding1);
    console.log('ordersDataService', ordersDataService);

    const orders = await ordersDataService.getOrders();
    commit(GET_ORDERS, orders);
  }
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
