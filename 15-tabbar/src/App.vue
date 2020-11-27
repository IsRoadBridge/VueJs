<template>
  <div id="app">
     <router-view></router-view>
    <Tabbar>
      <Tabbaritem path="/Home">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/Category">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </Tabbaritem>
      <Tabbaritem path="/Shopcar">
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </Tabbaritem>
      <Tabbaritem path="/Profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </Tabbaritem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from "./components/Tabbar";
  import Tabbaritem from "./components/Tabbaritem";
    export default {
        name: "App",
        components: {Tabbaritem, Tabbar},
        comments:{
            Tabbar,
            Tabbaritem
        }
    }
</script>

<style>
 @import "./assets/body.css";

</style>
