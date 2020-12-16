<template>
  <div>
  </div>
</template>

<script>
import request from "./network/request";
export default {
  name: 'App'
}

request({
    url: '/home/multidata'
}).then(res =>{
    console.log(res);
}).catch(err =>{
    this.message = err
})
</script>

<style>
</style>
