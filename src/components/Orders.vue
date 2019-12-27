<template>
  <div>
    <div>Here's the orders in the system:</div>
    
    <div v-for="order in orders" :key="order">
      <span>OrderId: {{order.orderId}}</span>
      <span>OrderNumber: {{order.orderNumber}}</span>
      <span>OrderDate: {{order.orderDate}}</span>
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
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>