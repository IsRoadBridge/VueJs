<template>
  <div id="tab-bar">
  <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
  #tab-bar{
    display: flex; /*flex布局，默认水平铺开*/
    background: #f6f6f6;
    position: fixed;/*绝对定位*/
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100,100,100,0.1); /*设置边框交界的阴影，参数分别表示x轴偏移，y轴偏移，模糊距离，颜色*/
  }
</style>