<template>
  <h2>这是档案</h2>
  <h2>{{$route.query.name}}</h2>
  <h2>{{$route.query.age}}</h2>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>