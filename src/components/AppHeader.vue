<template>
  <header>
    <nav class="navbar has-background-dark is-dark" role="navigation" aria-label="main navigation">
      <HeaderBrand />
      <HeaderLinks />
    </nav>
    <NavBar />
  </header>
</template>

<script>
import HeaderBrand from "@/components/Header-Brand";
import HeaderLinks from "@/components/Header-Links";
import NavBar from "@/components/Nav-Bar";

export default {
  name: "AppHeader",
  props: {},
  components: { HeaderBrand, HeaderLinks, NavBar }
};
</script>

<style lang='scss'>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #438ad1;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
