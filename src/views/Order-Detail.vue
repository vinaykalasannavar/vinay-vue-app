<template>
  <div>
    <div v-show="order">
      <div class="selected-order-details">
        <div>
          <span>The order you have selected occurs in the month of: {{selectedOrdersMonth}}:</span>
        </div>

        <div class="order-table">
          <table>
            <tr>
              <td>
                <span>Order Id</span>
              </td>
              <td>
                <input readonly v-model="order.id" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <span>OrderNumber</span>
              </td>
              <td>
                <input v-model="order.orderNumber" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <span>OrderDate</span>
              </td>
              <td>
                <input v-model="order.orderDate" type="date" />
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
    <div v-if="message">
      <span>{{message}}</span>
    </div>
  </div>
</template>

<script>
import { ordersData } from "../common/ordersData";
export default {
  data() {
    return {
      name: "OrderDetail",
      message: "",
      order: {}
    };
  },
  async created() {
    this.fetchOrder();
  },
  methods: {
    cancelOrderChanges() {
      this.$emit("cancel");
    },
    saveOrderChanges() {
      this.$emit("save", this.orderCopy);
    },
    async fetchOrder() {
      this.order = null;
      this.message = "Loading the order, please wait...";
      this.order = await ordersData.getOrder(this.id);

      console.log(this.order);

      this.message = "";
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
    id: {
      type: Number,
      default: 0
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