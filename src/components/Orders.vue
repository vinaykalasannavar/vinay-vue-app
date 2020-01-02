<template>
  <div>
    <div v-if="message">{{ message }}</div>

    <div v-if="!message">
      <span>Here are the orders in the system:</span>
    </div>

    <div>
      <div>
        <orders-list
          :orders="orders"
          :selectedOrderId="selectedOrder? selectedOrder.orderId : 0"
          @orderSelected="selectAnOrder"
        />
      </div>
    </div>

    <OrderDetail
      v-if="selectedOrder"
      :order="selectedOrder"
      :key="selectedOrder.orderId"
      @cancel="cancelOrder"
      @save="saveOrder"
    />
  </div>
</template>

<script>
import OrdersList from "@/components/Orders-List";
import OrderDetail from "@/components/Order-Detail";
import { ordersData } from '../common/ordersData';

export default {
  data() {
    return {
      key: "",
      message: "",
      orders: [],
      selectedOrder: null,
      selectedOrderId: 0
    };
  },
  async created() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      //TODO: log that the component is created.
      this.orders = [];
      this.selectedOrder = null;
      this.message = 'Fetching orders, please wait...';
      this.orders = await ordersData.getOrders();
      this.message = '';
    },
    selectAnOrder(order) {
      this.selectedOrder = order;
      this.selectedOrderId = this.selectedOrder.orderId;
    },
    cancelOrder() {
      this.selectedOrder = null;
    },
    saveOrder(order) {
      const orderIndex = this.orders.findIndex(
        o => o.orderId == this.selectedOrder.orderId
      );
      this.orders.splice(orderIndex, 1, order);
      this.orders = [...this.orders];
      this.selectedOrder = undefined;
    }
  },
  components: { OrdersList, OrderDetail }
};
</script>

<style lang="scss" scoped></style>
