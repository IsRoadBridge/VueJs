<template>
  <div>
    <!--通过router-link关联路由-->
    <router-link to="/" tag="button">Home</router-link> |
    <router-link to="/about" tag="button">About</router-link>
    <!--通过router-view展示关联路由页面-->
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
  .active {
    color: red;
  }
</style>