<template>
  <div>
    <!--通过query实现传参的两种方式，link和方法-->
    <router-link :to="{path: '/profile',query:{name:'zhansan',age: 18}}" >档案</router-link>|
    <router-link to="/home">首页</router-link>
    <router-link to="/user">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
  .active {
    color: red;
  }
</style>