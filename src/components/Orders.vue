<template>
  <div>
    <div>Here's the orders in the system:</div>

    <div>
      <div>
        <ul class="orders">
          <li
            v-for="order in orders"
            :key="order.orderId"
            @click="selectOrder(order)"
            class="order"
            :class="{'selected-order': (selectedOrder != null && selectedOrder.orderId == order.orderId)}"
          >
            <div class="order-id">Order Id: {{order.orderId}}</div>
            <div class="order-number">Order No: {{order.orderNumber}}</div>
            <div class="order-date">Date: {{ order.orderDate }}</div>
          </li>
        </ul>
      </div>
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
.orders {
  list-style: none;
  width: 100%;

  .order {
    background-color: #40b883a6;
    border: 1px solid #12613ea6;
    margin: 5px 5px 5px 5px;
    width: 150px;
    height: 100px;
    float: left;

    &.selected-order {
      background-color: rgb(7, 145, 145);
    }

    .order-id {
      font-size: x-small;
      float: right;
    }
    .order-number {
      height: 50px;
      padding: 30px 0 0 0;
    }
    .order-date {
      font-size: x-small;

      align-items: flex-end;
      margin: 20px 0 0 0px;
    }
  }
}
</style>