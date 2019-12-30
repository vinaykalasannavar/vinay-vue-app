<template>
  <div>
    <div>Here are the orders in the system:</div>

    <div>
      <div>
        <orders-list :orders="orders" @orderSelected="selectAnOrder" />
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

export default {
  data() {
    return {
      key: "",
      orders: [
        {
          orderId: "1",
          orderNumber: "1001",
          orderDate: "2019-12-01"
        },
        {
          orderId: "2",
          orderNumber: "1002",
          orderDate: "2019-12-02"
        },
        {
          orderId: "3",
          orderNumber: "1003",
          orderDate: "2019-12-03"
        },
        {
          orderId: "4",
          orderNumber: "1004",
          orderDate: "2019-12-04"
        },
        {
          orderId: "5",
          orderNumber: "1005",
          orderDate: "2019-12-05"
        }
      ],
      selectedOrder: null
    };
  },
  methods: {
    selectAnOrder(order) {
      this.selectedOrder = order;
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
