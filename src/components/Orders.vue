<template>
  <div>
    <div>Here's the orders in the system:</div>

    <div v-for="order in orders" :key="order.orderId" @click="selectOrder(order)">
      <span class="order-id">OrderId: {{order.orderId}}</span>
      <span class="order-number">OrderNumber: {{order.orderNumber}}</span>
      <span class="order-date">OrderDate: {{order.orderDate}}</span>
      
    </div>

    <div v-if="selectedOrder != null">
      <span>Here is the order you have selected:</span>

      <div>
        <table>
          <tr>
            <td>
              <span>OrderId</span>
            </td>
            <td>
              <input readonly v-model="selectedOrder.orderId" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <span>OrderNumber</span>
            </td>
            <td>
              <input v-model="selectedOrder.orderNumber" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <span>OrderDate</span>
            </td>
            <td>
              <input v-model="selectedOrder.orderDate" type="text" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
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
      selectedOrder: null,
      selectedOrderText: ""
    };
  },
  methods: {
    selectOrder(order) {
      this.selectedOrder = order;

      this.selectedOrderText = JSON.stringify(this.selectedOrder);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>