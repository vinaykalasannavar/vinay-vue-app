<template>
  <div>
    <div class="selected-order-details">
      <div>
        <span>The order you have selected occurs in the month of: {{selectedOrdersMonth}}:</span>
      </div>

      <div class="order-table">
        <table>
          <tr>
            <td>
              <span>OrderId</span>
            </td>
            <td>
              <input readonly v-model="orderCopy.orderId" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <span>OrderNumber</span>
            </td>
            <td>
              <input v-model="orderCopy.orderNumber" type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <span>OrderDate</span>
            </td>
            <td>
              <input v-model="orderCopy.orderDate" type="date" />
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div>
      <button @click="cancelOrderChanges">Cancel</button>
      <button @click="saveOrderChanges">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "OrderDetail",
      orderCopy: { ...this.order }
    };
  },
  methods: {
    cancelOrderChanges() {
      this.$emit("cancel");
    },
    saveOrderChanges() {
      this.$emit("save", this.orderCopy);
    }
  },
  computed: {
    selectedOrdersMonth() {
      return this.order != null
        ? new Date(this.order.orderDate).toLocaleString("default", {
            month: "long"
          })
        : "";
    }
  },
  props: {
    order: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.selected-order-details {
  border: 5px solid #059191;
  height: 150px;
  width: 350px;
  background: #059191;
  display: inline-grid;

  .order-table {
    display: inline-flex;
  }
}
</style>