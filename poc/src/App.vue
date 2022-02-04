<template>
  <router-view>
    <sign-up></sign-up>
    <home></home>
  </router-view>
</template>

<script>
import signUp from "./components/signUp.vue"
import home from "./components/home.vue"

export default {
  components:{
    "sign-up":signUp,
    "home":home
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
</style>
