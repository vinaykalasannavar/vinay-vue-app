import * as axios from "axios";

import { API_PATH } from "./config";

const getOrders = async function() {
  try {
    const response = await axios.get(`${API_PATH}/orders`);
    let ordersData = parseOrdersData(response);
    return ordersData;
  } catch (error) {
    return [];
  }
};

const getOrder = async function(id) {
  try {
    const response = await axios.get(`/${API_PATH}/orders/${id}`);
    let order = parseOrder(response);
    return order;
  } catch (error) {
    return {};
  }
};

const addOrder = async function(order) {
  try {
    console.log(`here is what you're trying to added: `, order);
    
    const response = await axios.post(`/${API_PATH}/orders`, order);
    let addOrder = parseOrder(response);
    return addOrder;
  } catch (error) {
    return {};
  }
};

const updateOrder = async function(order) {
  try {
    console.log(`here is what you're trying to updated: `, order);
    
    const response = await axios.put(`/${API_PATH}/orders/${order.id}`, order);
    let updatedOrder = parseOrder(response);
    return updatedOrder;
  } catch (error) {
    return {};
  }
};

const parseOrdersData = response => {
  if (response.status !== 200)
    throw Error(`Failed to fetch orders, error message: £{response.message}`);
  if (!response.data) return [];
  let ordersList = response.data;
  if (typeof ordersList !== "object") {
    ordersList = [];
  }
  return ordersList;
};

const parseOrder = response => {
  if (response.status !== 200)
    throw Error(`Failed to fetch orders, error message: £{response.message}`);
  if (!response.data) return {};
  let order = response.data;
  if (typeof order !== "object") {
    order = {};
  }
  return order;
};

export const ordersDataService = {
  getOrders,
  getOrder,
  addOrder,
  updateOrder
};
