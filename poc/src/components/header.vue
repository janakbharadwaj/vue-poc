<template>
  <div class="nav">
    <router-link to="/">home</router-link>
    <router-link to="/addRestro">add restaurant</router-link>
    <a v-on:click="logout" href="#">logout</a>
  </div>
</template>


<script>
export default {
  name:"header",
  data(){
    return{
      
    }
  },
  methods:{
    logout(){
        localStorage.clear();
        this.$router.push({name:"login"})
    }
  }
}
</script>


<style scoped>
    .nav{
        text-align: center;
        background-color: #333;
        overflow: hidden;
    }

    .nav a{
        float: left;
        color: white;
        padding: 14px;
        text-decoration: none;
        text-align: center;
        margin-right: 5px;
    }

    .nav a:hover{
        background-color: #ddd;
        color: #333;
    }
</style>

