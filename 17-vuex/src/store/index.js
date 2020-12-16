import { createStore } from 'vuex'

export default createStore({
  //state储存数据
  state: {
    counter: 0,
    student: {age: 13,name:'zs'}
  },
  //方法
  mutations: {
    increment(state){
      state.counter++
    },
    decrment(state){
      state.counter--
    },
    //mutations的第一种提交风格，普通的方法传参，也可以传对象
    addCount(state,count){
      state.counter+=count
    },
    //mutations的第一种提交风格,把第二个当一个整体，传一个对象
    addCount2(state,payload){
      state.counter+=payload.count
    },
    updateInfo(state){
      state.student.name='ls'
    }
  },
  //对于异步操作，需要通过actions进行提交到mutations
  actions: {
    update(context){
     setTimeout(() => {
        context.commit('updateInfo')
     },1000)
    }
  },
  //getters是用来对数据进行各种处理，并返回处理后的结果，相当于计算属性
  getters:{
    power(state){
      return state.counter * state.counter
    }
  },
  //可以将整个store再按模块进行划分，需要自己去看
  modules: {
  }
})
