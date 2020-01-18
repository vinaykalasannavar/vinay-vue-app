<template>
  <div>
    <div v-if="order">
      <div class="selected-order-details">
        <div>
          <span
            v-if="selectedOrdersMonth"
          >The order you have selected occurs in the month of: {{selectedOrdersMonth}}:</span>
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
// import { ordersDataService } from "../common/ordersDataService";
// this.order = this.getOrderById(this.id);
import { mapGetters, mapActions } from "vuex";
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
    ...mapActions(["addOrderAction", "updateOrderAction"]),
    cancelOrderChanges() {
      // this.$emit("cancel");
      this.$router.push({ name: "orders" });
    },
    async saveOrderChanges() {
      // await ordersDataService.updateOrder(this.order);
      console.log(`Saving (${this.areYouAdding}) order)...`, this.order);
      
      this.areYouAdding
        ? await this.addOrderAction(this.order)
        : await this.updateOrderAction(this.order);

      this.$router.push({ name: "orders" });
    },
    async fetchOrder() {
      this.order = null;
      this.message = `Loading the order, please wait...`;

      console.log(`Loading the order (for id: ${this.id}), please wait...`);

      // this.order = await ordersDataService.getOrder(this.id);
      this.order = await {...this.getOrderById(this.id)};

      console.log("this.order = ", this.order);

      this.message = "";
    }
  },
  computed: {
    ...mapGetters(['getOrderById']),
    areYouAdding() {
      return this.id == 0;
    },
    selectedOrdersMonth() {
      return this.order != null && this.order.orderDate != null
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