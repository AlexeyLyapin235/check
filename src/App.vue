<template>
  <div>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    },
  },
};
</script>

<style >

</style>