import Vue from "vue";
import Vuex from "vuex";
import { ordersDataService } from "../common";
import {
  GET_ORDERS,
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER
} from "./mutation-types";

Vue.use(Vuex);

const state = {
  orders: []
};
const mutations = {
  /* Property syntax "[GET_ORDERS]" for function name */
  [GET_ORDERS](state, orders) {
    state.orders = orders;
  },
  [ADD_ORDER](state, order) {
    // state.orders.push(order);
    state.orders.unshift(order);
  },
  [UPDATE_ORDER](state, order) {
    var orderIndex = state.orders.findIndex(o => o.id == order.id);
    state.orders.splice(orderIndex, 1, order);
    state.orders = [...state.orders];
  },
  [DELETE_ORDER](state, orderId) {
    state.orders = [...state.orders.filter(o => o.id != orderId)];
  }
};
const actions = {
  async getOrdersAction({ commit }) {
    const orders = await ordersDataService.getOrders();
    commit(GET_ORDERS, orders);
  },
  async addOrderAction({ commit }, order) {
    const addedOrder = await ordersDataService.addOrder(order);
    commit(ADD_ORDER, addedOrder);
  },
  async updateOrderAction({ commit }, order) {
    const updatedOrder = await ordersDataService.updateOrder(order);
    commit(UPDATE_ORDER, updatedOrder);
  },
  async deleteOrderAction({ commit }, orderId) {
    const deletedOrderId = await ordersDataService.deleteOrder(orderId);
    commit(DELETE_ORDER, deletedOrderId);
  }
};
const getters = {
  getOrderById: state => id => state.orders.find(o => o.id == id)
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
