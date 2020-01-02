import * as axios from 'axios';

import { API_PATH } from './config'

const getOrders = async function () {
    try {
        const response = await axios.get(`${API_PATH}/orders.json`);
        let ordersData = parseOrdersData(response);
        return  ordersData;
    } catch (error) {
        // logging.logError('Failed to fetch orders data, error message: ${error}');
        return [];
    }
}

const parseOrdersData = response => {
    if  (response.status !== 200) throw Error(`Failed to fetch orders, error message: £{response.message}`);
    if (!response.data) return [];
    let ordersList = response.data;
    if (typeof ordersList !== 'object') {
      ordersList = [];
    }
    return ordersList;
}

export const ordersData = {
    getOrders,
}