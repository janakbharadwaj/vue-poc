<template>
  <div class="singlerestro">
    <h1>{{restaurant.name}}</h1>
    <h2>Contact : {{restaurant.contact}}</h2>
    <h2>Address : {{restaurant.address}}</h2>
    <button v-on:click='updateRestro'>Update</button>
    <button v-on:click='goBack'>Back</button>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data(){
      return{
        id:this.$route.params.id,
        restaurant:{}
      }
    },
    async created(){
      let data = await axios.get(`http://localhost:3000/restaurants/${this.id}`)
      //console.log(data.data);
      this.restaurant = data.data
    },
    methods:{
      goBack(){
        this.$router.push({name:"home"})
      },
      updateRestro(){
        this.$router.push({name:"updateRestro"})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .singlerestro{
    border: 1px dotted rgb(231, 111, 111);
    border-radius: 10px;
    padding: 10px;
    margin: 100px auto;
    background-color: rgba(182, 65, 57, 0.911);
    color: whitesmoke;
    width: 40%;
    height: 32vh;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .singlerestro>button{
    margin-top: 15px;
    width: 25%;
    color: rgb(182,66,57);
    background-color: white;
    padding: 10px;
    margin: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
  }
</style>
