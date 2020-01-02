<template>
  <div>
    <ul class="orders">
      <li
        v-for="order in orders"
        :key="order.orderId"
        @click="selectLocalOrder(order)"
        class="order"
        :class="{
          'selected-order':
            selectedOrderId == order.orderId
        }"
      >
        <div class="order-id">Order Id: {{ order.orderId }}</div>
        <div class="order-number">Order No: {{ order.orderNumber }}</div>
        <div class="order-date">Date: {{ order.orderDate | formatDate }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatters } from "../common/formatters";

export default {
  data() {
    return {
      name: "OrdersList"
    };
  },
  mixins: [formatters],
  methods: {
    selectLocalOrder(order) {
      // this.selectedOrder = order;

      this.$emit("orderSelected", order);
    }
  },
  props: {
    orders: {
      type: Array,
      default: () => {}
    },
    selectedOrderId: {
      type: Number,
      default: () => 0
    }
  }
};
</script>

<style lang="scss" scoped>
.orders {
  list-style: none;
  display: inline-flex;

  .order {
    background-color: #40b883a6;
    border: 1px solid #12613ea6;
    margin: 5px 5px 5px 5px;
    width: 150px;
    height: 100px;

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
