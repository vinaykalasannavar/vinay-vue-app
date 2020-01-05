<template>
  <div>
    <div v-if="message">{{ message }}</div>

    <div v-if="!message">
      <span>Here are the orders in the system:</span>
    </div>

    <div>
      <div>
        <orders-list :orders="orders" />
      </div>
    </div>
  </div>
</template>

<script>
import OrdersList from "./Orders-List";
import { ordersData } from '../common/ordersData';

export default {
  data() {
    return {
      key: "",
      message: "",
      orders: [],
      selectedOrder: null
    };
  },
  async created() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      //TODO: adder logger and log - component is created, data fetched, etc.
      this.orders = [];
      this.selectedOrder = null;
      this.message = 'Fetching orders, please wait...';
      this.orders = await ordersData.getOrders();
      this.message = '';
    },
    // cancelOrder() {
    //   this.selectedOrder = null;
    // },
    // saveOrder(order) {
    //   const orderIndex = this.orders.findIndex(
    //     o => o.orderId == this.selectedOrder.orderId
    //   );
    //   this.orders.splice(orderIndex, 1, order);
    //   this.orders = [...this.orders];
    //   this.selectedOrder = undefined;
    // }
  },
  components: { OrdersList }
};
</script>

<style lang="scss" scoped></style>
