<template>
  <div id="app">
    <AppHeader />
    <Orders />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Orders   from "@/components/Orders"

export default {
  name: "app",
  components: {
    AppHeader,
    Orders
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>

<style lang="scss">
@import "@/styles/appstyles.scss";
</style>
