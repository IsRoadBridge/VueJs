<template>
  <div class="tar-item" @click="item()">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active: isActive}"><slot  name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "Tabbaritem",
        props:{
            path: String
        },
        computed: {
            isActive(){
                return this.$route.path.includes(this.path)
            }
        },
        methods:{
            item(){
                console.log('dasd')
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
  .tar-item{
    text-align: center;
    flex: 1; /*设置为1表示均等分*/
    height: 49px;
    font-size: 14px;
  }
  .tar-item img{
    margin-top: 3px;
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .active {
    color: red;
  }
</style>