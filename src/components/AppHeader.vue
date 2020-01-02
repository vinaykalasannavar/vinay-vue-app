<template>
  <header>
    <nav class="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
      <HeaderBrand />
      <div id="nav">
        <router-link to="/">Orders</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <HeaderLinks />
    </nav>
  </header>
</template>

<script>
import HeaderBrand from "@/components/Header-Brand";
import HeaderLinks from "@/components/Header-Links";

export default {
  name: "AppHeader",
  props: {},
  components: { HeaderBrand, HeaderLinks }
};
</script>

<style>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
