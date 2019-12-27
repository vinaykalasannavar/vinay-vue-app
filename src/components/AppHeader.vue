<template>
  <header>
    <nav
      class="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBrand />
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

<style></style>
