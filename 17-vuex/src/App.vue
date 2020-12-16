<template>
  <div>
    <!--使用$store.state.变量名获取vuex中的变量-->
    <h2>{{$store.state.counter}}</h2>
    <!--定义一个方法用来提交对变量的修改-->
    <button @click="incre">+</button>
    <button @click="decr">-</button>
    <button @click="add(5)">+5</button>
    <button @click="add(10)">+10</button>
    <button @click="add2(10)">+10</button>
    <h2>{{$store.state.student}}</h2>
    <button @click="asyncMe()">+10</button>


    <!--获取getters的结果-->
    <h2>{{$store.getters.power}}</h2>
  </div>
</template>

<script>
  export  default  {
      name: 'App',
      methods:{
          //遵循vuex的规范，方法中再调用commit提交到mutations的你要用的指定方法
          incre(){
              this.$store.commit('increment')
          },
          decr(){
              this.$store.commit('decrment')
          },
          //对应第一种提交风格
          add(count){
              this.$store.commit('addCount',count)
          },
          //对应第二种提交风格
          add2(count){
             this.$store.commit({
                 type: 'addCount2',
                 count
             })
          },
          //对于异步操作需要分发到actions
          asyncMe(){
              this.$store.dispatch('update')
          }
      }
  }
</script>
<style>
</style>
