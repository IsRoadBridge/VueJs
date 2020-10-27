<template>
  <div>
    <h2>这是首页</h2>
    <h2>这是首页内容</h2>
    <!--在父路由中加router-link写全路径-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/messages">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>
