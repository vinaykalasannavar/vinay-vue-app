<template>
  <div>
    <div v-if="message">{{ message }}</div>

    <div v-if="!message">
      <span>Here are the orders in the system:</span>
    </div>

    <div>
      <div>
        <router-link :to="{name: 'order-detail', params:{id: 0} }" class="1add-order">
          <i class="fas fa-plus"></i>
          <!-- Add order -->
        </router-link>
      </div>
      <div>
        <orders-list :orders="orders" />
      </div>
    </div>
  </div>
</template>

<script>
import OrdersList from "./Orders-List";
// import { ordersDataService } from "../common/ordersDataService";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      key: "",
      message: "",
      selectedOrder: null
    };
  },
  async created() {
    this.fetchOrders();
  },
  methods: {
    ...mapActions(["getOrdersAction"]),
    async fetchOrders() {
      //TODO: adder logger and log - component is created, data fetched, etc.
      this.selectedOrder = null;
      this.message = "Fetching orders, please wait...";
      // this.orders = await ordersDataService.getOrders();

      // Dispatching the action
      // 1. First way:
      // await this.$store.dispatch('getOrdersAction');

      // 2. Second way - because we've mapped actions: ...mapActions see methods of this component.
      await this.getOrdersAction();

      this.message = "";
    }
  },
  components: { OrdersList },
  computed: {
    //Different ways of acessing state
    // 1. First way
    // heroes(){
    //   return this.$store.state.orders;

    // },

    // 2. Second way
    // ...mapState({ orders: state => state.orders })

    // 3. Third way: get a state called orders
    // ...mapState({ orders: 'orders' })

    // 4. Fourth way: since it has the same name
    // we can acutally use the syntax with the array format, to say...
    // go get the thing called orders and create a property locally called orders
    ...mapState(["orders"])
  }
};
</script>

<style lang="scss" scoped>
// @import 'vars';

.add-order {
  background: antiquewhite;
}
</style>
