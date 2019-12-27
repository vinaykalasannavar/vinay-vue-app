<template>
  <div id="app">
    <AppHeader />
    <HelloWorld msg="Welcome to Vinay's Vue.js App :)" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    AppHeader
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
